// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express from "express";
import serverless from "serverless-http";
import server from "./api/server.js";
import dbConnect from "./config/db.js";

dbConnect();

export const handler = serverless(server);
