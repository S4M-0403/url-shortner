const generateNanoId = require("../utils/helper.js");
const saveShortUrl = require("../dao/shortUrl.js");

const createShortUrlWithoutUser = async (url) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(shortUrl, url);
    return shortUrl;
}

const createShortUrlWithUser = async (url, userId) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(url, shortUrl, userId);
    return shortUrl;
}

module.exports = {
    createShortUrlWithoutUser,
    createShortUrlWithUser
};
