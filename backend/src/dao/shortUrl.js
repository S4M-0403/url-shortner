const urlSchema = require("../models/shortUrl.model.js");
const saveShortUrl = async (shortUrl, longUrl, userId) => {
    const newUrl = new urlSchema({
        full_url: longUrl,
        short_url:shortUrl
    })
    if (userId) {
        newUrl.userId = userId;
    }
    newUrl.save();
};

const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}})
}

module.exports = {
    saveShortUrl,
    getShortUrl,
};