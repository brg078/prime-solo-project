const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/flagged/:id', (req,res) => {
    console.log('in GET flagged router', req.params.id);
    const queryText = `SELECT "user".username, questions.question, questions.flagged, questions.approved, questions.asker_id FROM questions
    JOIN "user" ON "user".id = questions.student_id
    WHERE "user".id = $1
    ORDER BY questions.id;`

    pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows)})
    .catch((error) =>{
    console.log('Error server GET flagged select query',error);
    res.sendStatus(500);
    })
});



module.exports = router;

//WHERE questions.flagged = true