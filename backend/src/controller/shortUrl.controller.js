const { getShortUrl } = require("../dao/shortUrl.js");
const {createShortUrlWithoutUser} = require("../services/shortUrl.service.js");

const createShortUrl = async (req, res) => {
    
        const {url} = req.body;
        const shortUrl = await createShortUrlWithoutUser(url);
        res.send(process.env.APP_URL + shortUrl);
}

const redirectFromShortUrl = async (req, res) => {
    const { id } = req.params;
    const url = await getShortUrl(id);
    res.redirect(url.full_url);
}

module.exports = {
    createShortUrl,
    redirectFromShortUrl,
};