import express from "express";
import ip from "ip";
import cors from "cors";
import dotenv from "dotenv";

// load environment variables from .env file
dotenv.config();

// set the PORT variable
const PORT = process.env.PORT || 3000;

// create or instanciate the app
const app = express();

// set up some middlewares
app.use(express.urlencoded({ extended: true }));

// set up the app to return responses in json format
app.use(express.json());

// allow requests coming from all urls
app.use(cors({ origin: '*'}));

// set up the / route
app.get("/", (req, res) => {
  res.send({message: 'UP'});
});

// log all the environment variables
console.log(process.env);

// start the server and listen on port PORT defaults to 3000
app.listen(PORT, () => {
  console.log(`Server running on: ${ip.address()}:${PORT}`);
});
