##table:trips  
  
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references users(id),
  vehicle_id uuid references vehicles(id),
  location text,
  distance_km numeric,
  passengers int,
  trip_cost numeric,
  is_completed boolean default false,
  created_at timestamp default now()

## relationships
-one customer can have multiple trips
-one vehicle can have many trips over time