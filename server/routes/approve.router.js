const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.put('/approve/:id', (req, res) => {
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


router.put('/flag/:id', (req, res) => {
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


router.put('/asked/:id', (req, res) => {
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





module.exports = router;