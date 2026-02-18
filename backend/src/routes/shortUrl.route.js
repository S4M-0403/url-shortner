const express = require("express");
const {createShortUrl} = require("../controller/shortUrl.controller");
const router = express.Router();

router.post("/", createShortUrl);

module.exports = router;