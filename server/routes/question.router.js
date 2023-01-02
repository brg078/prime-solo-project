const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('in server side GET wack question router!');
  //will update this query to reflect student name not just ID with a JOIN
  const queryText = 'SELECT "user".username, questions.question FROM questions JOIN "user" ON "user".id = questions.student_id;'
  pool.query(queryText)
    .then((result) => { res.send(result.rows)})
    .catch((error) =>{
      console.log('Error server GET question select query',error);
      res.sendStatus(500);
    })
});


router.post('/', (req, res) => {
  const questionToAdd = req.body;
  console.log('in wack question router POST! Question:',questionToAdd.question,' Student ID: ',questionToAdd.studentId);
  
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
