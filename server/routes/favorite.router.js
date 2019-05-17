const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM images`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log(`'sup bro?', ${ req.body.url }`)
  const queryText = `INSERT INTO images (url) VALUES ('${req.body.url}')`;
  pool.query(queryText)
  .then((result) => {
  res.sendStatus(201)})
  .catch((error) => {
    console.log(`Error on router.post favorites: ${error}`);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
