const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.put('/approve/:id', rejectUnauthenticated, (req, res) => {
    const id = [req.params.id];
    console.log('in PUT approve router',id);
    const queryText = `UPDATE questions SET approved = NOT approved  WHERE id = $1;`;
    const queryValues = id;

    pool.query(queryText,queryValues)
    .then(() => {res.sendStatus(200) })
    .catch((error) => {
        console.log('Error in UPDATE server approve', error);
        res.sendStatus(500);
    })
})


router.put('/flag/:id',rejectUnauthenticated,  (req, res) => {
    const id = [req.params.id];
    console.log('in PUT flag router',id);
    const queryText = `UPDATE questions SET flagged = true, archived = true WHERE id = $1;`;
    const queryValues = id;

    pool.query(queryText,queryValues)
    .then(() => {res.sendStatus(200) })
    .catch((error) => {
        console.log('Error in UPDATE server approve', error);
        res.sendStatus(500);
    })
})


router.put('/gold/:id',rejectUnauthenticated,  (req, res) => {
    const id = [req.params.id];
    console.log('in PUT gold router',id);
    const queryText = `UPDATE questions SET goldstar = true WHERE id = $1;`;
    const queryValues = id;

    pool.query(queryText,queryValues)
    .then(() => {res.sendStatus(200) })
    .catch((error) => {
        console.log('Error in UPDATE server approve', error);
        res.sendStatus(500);
    })
})


router.put('/asked/:id',rejectUnauthenticated,  (req, res) => {
    const id = req.params.id;
    const idAsk = req.body.askId;
    console.log('in PUT asked router',id,idAsk);
    const queryText = `UPDATE questions SET asker_id = $2, archived = true WHERE id = $1;`;
    const queryValues = [id, idAsk];

    pool.query(queryText,queryValues)
    .then(() => {res.sendStatus(200) })
    .catch((error) => {
        console.log('Error in UPDATE server approve', error);
        res.sendStatus(500);
    })
})


router.put('/archiveall',rejectUnauthenticated,  (req, res) => {
    console.log('in PUT archive all router');
    const queryText = `UPDATE questions SET archived = true  WHERE archived = false;`;

    pool.query(queryText)
    .then(() => {res.sendStatus(200) })
    .catch((error) => {
        console.log('Error in UPDATE server approve', error);
        res.sendStatus(500);
    })
})




module.exports = router;