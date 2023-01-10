const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/submitted', (req, res) => {
    console.log('in server side GET wack scores wack submitted router!');
    const queryText = `SELECT COUNT(*) FROM questions WHERE student_id=1;`
    
    pool.query(queryText)
        .then((result) => { res.send(result.rows)})
        .catch((error) =>{
            console.log('Error server GET scores submitted select query',error);
            res.sendStatus(500);
        })
});


router.get('/asked', (req, res) => {
    console.log('in server side GET wack scores wack asked router!');
    const queryText = `SELECT COUNT(*) FROM questions WHERE asker_id=1;`
    
    pool.query(queryText)
    .then((result) => { res.send(result.rows)})
    .catch((error) =>{
        console.log('Error server GET scores asked select query',error);
        res.sendStatus(500);
    })
});


module.exports = router;