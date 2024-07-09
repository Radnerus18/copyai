const mongoose = require("mongoose");
const {GridFsStorage} = require('multer-gridfs-storage')
require("dotenv").config();
const { MONGO_URI } = process.env;
mongoose.connect(MONGO_URI);
const db1 = mongoose.connection;
db1.on("error", console.error.bind(console, "MongoDB connection error:"));
db1.once("open", () => {
  console.log("Connected to MongoDB");
});
let bucket;
db1.on("connected", () => {
  var dbs = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(dbs, {
    bucketName: "newBucket"
  });
  console.log(bucket);
});
