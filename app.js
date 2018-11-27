const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const groups = require('./groups/groups.js')

const pools = require('./pools/unpacking.js');

app.get('/', (req, res) => {
    res.json({msg: 'Hello :)' });
});

app.post('/v1/groups', groups.doPost);

app.post('/v1/pools', pools.doPost);
app.get('/v1/pools', pools.doGet);

module.exports = app;
