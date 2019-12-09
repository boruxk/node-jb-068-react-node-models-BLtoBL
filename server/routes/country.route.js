const express = require('express');
const router = express.Router();
const bl = require('../bl/country.bl');

router.get('/', (req, res) => {
    bl.getCountries(function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

module.exports = router;