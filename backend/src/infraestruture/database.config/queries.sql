

CREATE TABLE pizza_table(  
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    pizza VARCHAR(255) NOT NULL UNIQUE,
    preco INTEGER,
    ingredientes VARCHAR(300)
);

CREATE TABLE order_table(  
    id INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
    id_order VARCHAR(255) NOT NULL,
    id_product VARCHAR(255) NOT NULL, 
    FOREIGN KEY (id_product) REFERENCES pizza_table (id)
);


SELECT * FROM pizza_table