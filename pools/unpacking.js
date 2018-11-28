const pool = require('./entity.js');
const pools = require('./methods.js');

doPost = function (req, res) {
    if (!(typeof req.body.name == 'string')
        || !(typeof req.body.description == 'string')
        || !Array.isArray(req.body.tasks)
        // || !Number.isInteger(req.cookies.userId)
        // || !db.users[req.cookies.userId] // user does not exist
        || !(typeof req.body.public === 'boolean')) {
        res.sendStatus(400);
    }

    var newPool = new pool.Pool(
        undefined,
        req.body.name,
        req.body.description,
        req.body.tasks,
        undefined, // req.cookies.userId
        req.body.public,
        undefined
    );

    if (pools.insert(newPool)) {
        res.sendStatus(201);
    } else {
        res.sendStatus(500);
    }
}

doGet = function (req, res) {
    result = pools.getByUserId(undefined) // req.cookies.userId
    res.status(200).json({ result });
}

module.exports = { doPost, doGet }
