const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/submitted/:id', rejectUnauthenticated, (req, res) => {
    console.log('in server side GET wack scores wack submitted router!', req.params.id);
    const queryText = `SELECT COUNT(*) FROM questions WHERE student_id=$1;`
    
    pool.query(queryText,[req.params.id])
        .then((result) => { res.send(result.rows)})
        .catch((error) =>{
            console.log('Error server GET scores submitted select query',error);
            res.sendStatus(500);
        })
});


router.get('/asked/:id', rejectUnauthenticated, (req, res) => {
    console.log('in server side GET wack scores wack asked router!', req.params.id);
    const queryText = `SELECT COUNT(*) FROM questions WHERE asker_id=$1;`
    
    pool.query(queryText,[req.params.id])
    .then((result) => { res.send(result.rows)})
    .catch((error) =>{
        console.log('Error server GET scores asked select query',error);
        res.sendStatus(500);
    })
});

router.get('/goldstar/:id', rejectUnauthenticated,(req, res) => {
    console.log('in server side GET wack scores wack goldstar router!', req.params.id);
    const queryText = `SELECT COUNT(*) FROM questions WHERE student_id=$1 AND goldstar=true;`
    
    pool.query(queryText,[req.params.id])
    .then((result) => { res.send(result.rows)})
    .catch((error) =>{
        console.log('Error server GET scores asked select query',error);
        res.sendStatus(500);
    })
});


module.exports = router;