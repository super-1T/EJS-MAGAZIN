CREATE TABLE PERSON {
    id BIGSERIAL PRIMARY KEY,
    person VARCHAR(40) NOT NULL,
    passwordperson TEXT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone integer,
    bucket boolean,
    want boolean,
    photo boolean,
}