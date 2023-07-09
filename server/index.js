import dotenv from "dotenv";
dotenv.config();
import server from "./api/server.js";
import dbConnect from "./config/db.js";
const port = process.env.PORT || 3333;

dbConnect();

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}!`)
);
