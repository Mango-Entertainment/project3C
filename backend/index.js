import server from "backend/api/server";

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}!`)
);
