const express = require('express');
const router = express.Router();
const bl = require('../bl/city.bl');

router.get('/', (req, res) => {
    bl.getCities(function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

module.exports = router;