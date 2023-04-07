CREATE TABLE CATEGORY {
    id BIGSERIAL PRIMARY KEY,
    namecategory: VARCHAR(255),
    ucategory: boolean,
    category_id integer,
    FOREIGN key (category_id) REFERENCES CATEGORY(id)
}