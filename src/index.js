import express from "express";
import ip from "ip";
import cors from "cors";
import dotenv from "dotenv";

// import the Response class.
import Response from "./domain/response.js";

// import the HttpStatus code
import HttpStatus from "./controller/patient.controller.js  ";

// import the logger object
import logger from "./util/logger.js";

// load environment variables from .env file
dotenv.config();

// set the PORT variable
const PORT = process.env.PORT || 3000;

// create or instanciate the app
const app = express();

// set up the app to return responses in json format
app.use(express.json());

// allow requests coming from all urls
app.use(cors({ origin: '*'}));

// set up the / route
app.get("/", (req, res) => {
  res.send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Patient API, v1.0.0 - All Systems Go'));
});

// log all the environment variables
console.log(process.env);

// start the server and listen on port PORT defaults to 3000
app.listen(PORT, () => {
  logger.info(`Server running on: ${ip.address()}:${PORT}`);
});
