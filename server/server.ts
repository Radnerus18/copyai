const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn.ts");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["content-type"],
    credentials: true,
  })
);

app.listen(4000, () => console.log("Server running at port 4000"));
