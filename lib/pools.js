const db = require('./db.js');

const postPools = function (req, res) {
    let pool = {
        id: undefined,
        name: req.body.name,
        description: req.body.description,
        tasks: req.body.tasks,
        creator: req.query.userId,
        public: req.body.public,
        creationTime: Date.now() / 1000 | 0
    };

    if (!(typeof pool.name == 'string')
        || !(typeof pool.description == 'string')
        || !Array.isArray(pool.tasks)
        || !Number.isInteger(pool.creator)
        || !(typeof pool.public == 'boolean')) {
        res.sendStatus(400);
    }

    for (let i = 0; i < pool.users.length; i++) {
        if (!Number.isInteger(pool.users[i])) {
            res.sendStatus(400);
        }
    }

    db.pools.insert(pool);

    res.status(201).json(group);
};

const getPools = function (req, res) {
    let creator = req.query.userId;

    if (!Number.isInteger(pool.creator)) {
        res.sendStatus(400);
    }

    let pools = db.pools.selectByUserId(creator);

    res.status(200).json(pools);
};

const getPool = function (req, res) {
    let pool = db.pools.selectById(req.query.id);

    if (pool == null) {
        res.sendStatus(404);
    } else {
        res.status(200).json(group);
    }
};

module.exports = { postPools, getPools, getPool }
