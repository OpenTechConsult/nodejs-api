// import the required modules
import mysql from 'mysql';
import dotenv from 'dotenv';

// load environment variables from .env file
dotenv.config();

// create a pool of connection
const pool = mysql.createPool({
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME
});

export default pool;

