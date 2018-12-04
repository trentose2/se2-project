const db = require('./db.js');

const postGroups = function (req, res) {
    let group = {
        id: undefined,
        name: req.body.name,
        description: req.body.description,
        users: req.body.users,
        creator: req.query.userId,
        public: req.body.public,
        creationTime: Date.now() / 1000 | 0
    };

    if (!(typeof group.name == 'string')
        || !(typeof group.description == 'string')
        || !Array.isArray(group.users)
        || !Number.isInteger(group.creator)
        || !(typeof pool.public == 'boolean')) {
        res.sendStatus(400);
    }

    for (let i = 0; i < group.users.length; i++) {
        if (!Number.isInteger(group.users[i])) {
            res.sendStatus(400);
        }
    }

    db.groups.insert(group);

    res.status(201).json(group);
};

const getGroups = function (req, res) {
    let groups = db.groups.selectAll();
    res.status(200).json(groups);
};

const getGroup = function (req, res) {
    let group = db.groups.selectById(req.query.id);

    if (group == null) {
        res.sendStatus(404);
    } else {
        res.status(200).json(group);
    }
};

module.exports = { postGroups, getGroups, getGroup };
