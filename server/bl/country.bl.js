const dal = require('../dal');
const countryModel = require('../models/country.model');

function getCountries(callback) {
    let query = "SELECT * FROM `country` ORDER BY id ASC";
    dal.readAll(query, function (err, data) {
        if (err) {
            callback(err);
        } else {
            data = data.map(c => new countryModel(c));
            callback(null, data);
        }
    })
}

module.exports.getCountries = getCountries;