const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3333;
app.use(bodyParser.json());


const city = require('./routes/city.route');
const country = require('./routes/country.route');
app.use('/city', city);
app.use('/country', country);

app.listen(process.env.PORT || PORT, () =>
    console.log(`App listening on port ${PORT}!`),
);