const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://dekinng:123@cluster0-nck4q.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);

module.exports = mongoose.connection;
