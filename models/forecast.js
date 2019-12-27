const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forecastSchema = Schema({
    name: String,
    temp: String,
    icon: String,
    condition: String,
    date_time: String,
    feels_like: String
});

module.exports = mongoose.model('Forecast', forecastSchema);
