const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn.ts");
const userRoute = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["content-type"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoute);

app.listen(4000, () => console.log("Server running at port 4000"));
