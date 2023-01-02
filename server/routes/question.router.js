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
  const questionToAdd = req.body;
  console.log('in wack question router! Question:',questionToAdd.question,' Student ID: ',questionToAdd.studentId);
  
  const queryText = `INSERT INTO questions ("student_id", "question") VALUES ($1, $2)`;
  const queryValues = [questionToAdd.studentId, questionToAdd.question];
  
  pool.query(queryText, queryValues)
    .then(() => {res.sendStatus(201)})
    .catch((error) => {
      console.log('error in POST question query, ',error);
      res.sendStatus(500);
    });
  
  
  

});

module.exports = router;
