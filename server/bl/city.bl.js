const dal = require('../dal');
const cityModel = require('../models/city.model');
const countrybl = require('./country.bl');

function getCities(callback) {
    let query = "SELECT * FROM `city` ORDER BY id ASC";
    dal.readAll(query, function (err, data) {
        if (err) {
            callback(err);
        } else {
            let dataWithCountry = [];
            data = data.map(c => new cityModel(c));
            countrybl.getCountries(function (e, dataCountry) {
                let temp = dataCountry;
                Promise.all(temp).then(res => {
                    data = data.forEach(c => {
                        for (let i = 0; i < res.length; i++) {
                            if (c.CountryCode === res[i].Code) {
                                c.CountryName = res[i].Name;
                                dataWithCountry.push(c);
                            }
                        }
                    });
                    Promise.all(dataWithCountry).then(res => {
                        callback(null, res);
                    })
                })
            });
        }
    })
}

module.exports.getCities = getCities;