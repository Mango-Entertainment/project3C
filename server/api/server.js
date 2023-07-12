// Import dependencies
// - brings in all of the modules we'll be using
import cors from "cors";
import { notFound, errorHandler } from "../middleware/errorMiddleware.js";

import userDataRouter from "../routes/userData.router.js";

import express from "express";

// Create and instance of an express app
// - create the actual server object
const server = express();

// Connect the app to global middleware
// - functions that every endpoint passes through
server.use(cors());
server.use(express.json());

// Endpoints check connection and perform functions
// - the code that sends and receives messages and determines what to do
server.use("/api/userdata", userDataRouter);

server.get("/hello", (req, res) => {
  res.json({ message: "Hello from the Server" });
});

server.use(notFound);

server.use(errorHandler);

// Listen to our export server
// - what the rest of the world connects to
export default server;
