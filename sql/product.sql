CREATE TABLE product {
    id bigserial NOT NULL PRIMARY KEY,
    nameproduct: text NOT NULL,
    descriptionproduct: text NOT NULL,
    photoproduct: text NOT NULL,
    tags: text,
    characteristics: text [][] 
    category_id bigint,
    FOREIGN KEY (product_id) REFERENCES CATEGORY (id);
}