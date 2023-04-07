CREATE TABLE cartItems (
    id serial PRIMARY KEY,
    user_id integer not null,
    item_name varchar(255) not null,
    nums INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES person(id);
)