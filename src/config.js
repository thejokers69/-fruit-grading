// src/config.js
const config = {
    database: {
        username: 'root',
        password: process.env.DB_PASSWORD,
        database: 'fruit-grading',
        host: 'localhost',
        dialect: 'mysql',
    }
};

export default config;