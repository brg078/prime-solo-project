const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  console.log('in server side GET wack question router!');
  const queryText = `SELECT "user".username, questions.id, questions.question, questions.flagged, questions.approved FROM questions
                      JOIN "user" ON "user".id = questions.student_id;`
  
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


router.delete('/:id', (req, res) => {
  //console.log(req.params.id);
  const queryText = 'DELETE FROM questions WHERE id=$1';

  pool.query(queryText, [req.params.id])
    .then(() => {res.sendStatus(200)})
    .catch((error) => {
      console.log('Error server DELETE question select query',error);
      res.sendStatus(500);
    });
  });


module.exports = router;