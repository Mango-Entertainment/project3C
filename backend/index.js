import server from "./api/server.js";
import dbConnect from "./config/db.js";
dbConnect();

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}!`)
);
