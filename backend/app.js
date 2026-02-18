const express = require("express");
const dotenv = require("dotenv");
dotenv.config("./.env");
const connectDB = require("./src/config/monogo.config.js");
const {redirectFromShortUrl} = require("./src/controller/shortUrl.controller.js")
const shortUrl = require("./src/routes/shortUrl.route.js");
const { errorHandler } = require("./src/utils/errorHandler.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create", shortUrl);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler)

app.listen(3000, () => {
    connectDB();
    console.log("server is listening to port 3000.");
})