// Router to giphy api

const express = require('express');
const router = express.Router();
const axios = require('axios');
req('dotenv').config();

router.get('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=${req.query}`)
        .then(response => {
            console.log(response.data)
            res.send(response.data)
        }).catch(err => {
            res.sendStatus(500)
        });
}); // End GET to giphy

module.exports = router;