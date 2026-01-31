##Table:vehicles

coloumns
id:uuid,primary key
name:text
registration_number text-unique
allowed_passengers:integer
isAvailable:boolean, default true
driver_id:UUID, forgein key  (user.id)
rate_per_km:numeric
owner_id:UUID, forgein_key (user.id-nullable)
created_at:timestamp

## relationship
-one owner can have many vehicles
-one driver can be assigned to one vehicles
