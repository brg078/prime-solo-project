const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here MOVE GET TO ITS OWN ROUTER IN TIME
});


router.post('/', (req, res) => {
  //const questionToAdd = req.body;
  console.log('in wack question router!');
  res.sendStatus(201);

});

module.exports = router;
