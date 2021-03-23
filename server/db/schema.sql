-- CREATE db tables for cc-adopt-a-pet, if they don't exist.

CREATE TABLE IF NOT EXISTS pet_types (
	id SERIAL PRIMARY KEY,
	type VARCHAR (255) NOT NULL,
	description TEXT
);

CREATE TABLE IF NOT EXISTS adoptable_pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  age INTEGER,
  vaccination_status BOOLEAN DEFAULT NULL,
  adoption_story TEXT NOT NULL,
  adoption_status VARCHAR(255) NOT NULL,
  type_id INTEGER REFERENCES pet_types(id)
);

CREATE TABLE IF NOT EXISTS adoption_applicatons (
	id SERIAL PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	phone_number VARCHAR (255) NOT NULL,
	email VARCHAR (255) NOT NULL,
	home_status VARCHAR (255) NOT NULL,
	application_status VARCHAR (255) NOT NULL,
	pet_id INTEGER REFERENCES adoptable_pets(id)
);

CREATE TABLE IF NOT EXISTS pet_surrender_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pet_name VARCHAR(255) NOT NULL,
  pet_age INTEGER,
  pet_type_id INTEGER REFERENCES pet_types(id) NOT NULL,
  pet_image_url VARCHAR(255) NOT NULL,
  vaccination_status BOOLEAN DEFAULT NULL,
  application_status VARCHAR(255) NOT NULL
);