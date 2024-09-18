-- Active: 1726620801332@@localhost@5432@anilytics
DROP TABLE watching_status;
CREATE TABLE watching_status(  
    status SMALLINT PRIMARY KEY,
    description VARCHAR(20) NOT NULL
);
