const db = require('./db.js')

const post = function (req, res) {
    let newGroup = {
        name: req.body.name,
        description: req.body.description,
        users: req.body.users,
        creator: req.query.creator,
        public: req.body.public,
        creationTime: Date.now()
    }

    // Check if name is string
    // Check if description is string
    // Check if creator is integer
    // Check if users is an array
    if (!(typeof newGroup.name === 'string') ||
        !(typeof newGroup.description === 'string') ||
        isNaN(newGroup.creator) || // Returns false even if creator is actually int
        !(Array.isArray(newGroup.users))) {
        res.sendStatus(400)
    }
    // Check if all users are represented as integers
    for (var i = 0; i < newGroup.users.length; i++) {
        if (!(Number.isInteger(newGroup.users[i]))) {
            res.sendStatus(400)
        }
    }

    db.groups.insert(newGroup)

    res.status(201).json(newGroup)
}

const getAllGroups = function (req, res) {
    groups = db.groups.selectAll()
    res.status(200).json(groups)
}

const getGroupById = function (req, res) {
    group = db.groups.selectById(req.params.id)

    if (group == null) {
        res.sendStatus(404)
    } else {
        res.status(200).json(group)
    }
}

module.exports = { post, getAllGroups, getGroupById }
