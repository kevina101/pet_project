DROP DATABASE IF EXISTS shelters;
CREATE DATABASE shelters;

\c shelters;

CREATE TABLE shelters (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    address VARCHAR  
);


INSERT INTO shelters (name, address)
    VALUES ('Bideawee', '410 E 38th St (866) 262-8133'),
    ('Best Friends Pet Adoption Center', '307 W Broadway (347) 762-3678'),
    ('BARC Shelter', '86 N 1st St (718) 486-7489'),
    ('ASPCA Adoption Center','424 E 92nd St, New York, NY 10128');
