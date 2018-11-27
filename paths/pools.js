const db = require('../db.js');
const pool = require('../classes/pool.js');

exports = module.exports = {};

exports.doPost = function (req, res) {
    if (!(typeof req.body.name == 'string')
        || !(typeof req.body.description == 'string')
        || !Array.isArray(req.body.tasks)
        // || !Number.isInteger(req.cookies.userId)
        // || !db.users[req.cookies.userId] // user does not exist
        || !(typeof req.body.public === 'boolean')) {
        res.sendStatus(400);
    }

    var id = db.pools.length;
    var name = req.body.name;
    var description = req.body.description;
    var tasks = req.body.tasks;
    var creator = -1; // req.cookies.userId;
    var public_ = req.body.public;
    var creationTime = Date.now();

    var newPool = new pool.Pool(
        id,
        name,
        description,
        tasks,
        creator,
        public_,
        creationTime
    );

    db.pools[id] = newPool

    res.sendStatus(201);
}
