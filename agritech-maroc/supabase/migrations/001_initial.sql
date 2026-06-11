-- Enable UUID generation
create extension if not exists "pgcrypto";

-- ────────────────────────────────────────────────────────────
-- Projects
-- ────────────────────────────────────────────────────────────
create table if not exists projects (
  id               uuid primary key default gen_random_uuid(),
  name             text not null,
  location         text not null,
  status           text not null check (status in ('en_preparation', 'en_cours', 'production')),
  start_date       date,
  description      text,
  total_surface_ha numeric(10,2) not null default 0,
  target_amount    numeric(15,2) not null default 0,
  raised_amount    numeric(15,2) not null default 0,
  created_at       timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
-- Investments
-- ────────────────────────────────────────────────────────────
create table if not exists investments (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  amount     numeric(15,2) not null check (amount > 0),
  surface_ha numeric(10,2) not null default 0,
  created_at timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
-- Field sensor data
-- ────────────────────────────────────────────────────────────
create table if not exists field_data (
  id                  uuid primary key default gen_random_uuid(),
  project_id          uuid not null references projects(id) on delete cascade,
  recorded_at         timestamptz default now(),
  humidity_pct        numeric(5,2) check (humidity_pct between 0 and 100),
  temperature_c       numeric(5,2),
  water_collected_l   numeric(10,2) default 0
);

-- ────────────────────────────────────────────────────────────
-- Contact messages
-- ────────────────────────────────────────────────────────────
create table if not exists contact_messages (
  id                uuid primary key default gen_random_uuid(),
  name              text not null,
  email             text not null,
  phone             text,
  investment_intent text,
  message           text not null,
  created_at        timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
-- Row Level Security
-- ────────────────────────────────────────────────────────────
alter table investments enable row level security;
alter table field_data enable row level security;
alter table projects enable row level security;
alter table contact_messages enable row level security;

-- Users see only their own investments
create policy "users_own_investments"
  on investments for all
  using (auth.uid() = user_id);

-- Anyone authenticated can read projects and field data
create policy "auth_read_projects"
  on projects for select
  using (auth.role() = 'authenticated');

create policy "auth_read_field_data"
  on field_data for select
  using (auth.role() = 'authenticated');

-- Contact messages are write-only from anonymous
create policy "anon_insert_contact"
  on contact_messages for insert
  with check (true);

-- ────────────────────────────────────────────────────────────
-- Seed demo data
-- ────────────────────────────────────────────────────────────
insert into projects (name, location, status, start_date, description, total_surface_ha, target_amount, raised_amount)
values
  (
    'Ferme Pilot Drâa-Tafilalet',
    'Drâa-Tafilalet, Maroc',
    'en_cours',
    '2025-03-01',
    'Premier site pilote combinant capteurs d''eau atmosphérique et agriculture régénérative. Production de fruits secs, miel et compost.',
    12.5,
    1500000,
    875000
  ),
  (
    'Expansion Souss-Massa',
    'Souss-Massa, Maroc',
    'en_preparation',
    '2025-09-01',
    'Deuxième ferme axée sur la production maraîchère premium et les lombrics pour compost à haute valeur ajoutée.',
    25.0,
    3000000,
    420000
  );

insert into field_data (project_id, recorded_at, humidity_pct, temperature_c, water_collected_l)
select
  id,
  now() - interval '2 hours',
  68.4,
  24.1,
  87.5
from projects
where name = 'Ferme Pilot Drâa-Tafilalet'
limit 1;
