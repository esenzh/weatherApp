const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost/myforecast',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);

module.exports = mongoose.connection;
