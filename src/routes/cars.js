const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const cars = require('../sample.json');

router.get('/', (req, res) => {
    res.json(cars);
});

router.post('/', (req, res) => {
    const { id, name, place } = req.body;
    if (id && name && place) {
        res.json(req.body);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

module.exports = router;