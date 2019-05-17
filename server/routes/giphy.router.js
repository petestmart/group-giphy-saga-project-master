// Router to giphy api
const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY2}&q=${req.query.tag}`)
        .then(response => {
            console.log('giphy router', response.data.data)
            res.send(response.data.data)
        }).catch(err => {
            res.sendStatus(500)
        });
}); // End GET to giphy

module.exports = router;