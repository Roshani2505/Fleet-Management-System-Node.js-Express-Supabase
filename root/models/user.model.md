## Table:users

id:UUID,primary key
name:text,not null
email:text,unique,not null
password:text,not null
role:enum(customer.owner,driver)
created_at:timestamp

##relationship
-one user has only one role
-users can be customer,owner,driver