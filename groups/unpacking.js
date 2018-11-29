const group = require('./entity.js');
const groups = require('./methods.js');

const doPost = function (req, res) {
    var group_id = undefined;
    var group_name = req.body.name;
    var group_description = req.body.description;
    var group_users = req.body.users;
    var group_creator = req.body.creator;
    var group_isPublic = req.body.public;
    var group_creationTime = Date.now();

    if (!(typeof group_name == 'string') ||
        !(typeof group_description == 'string') ||
        !(Number.isInteger(group_creator)) ||
        !(Array.isArray(group_users))) {
        res.sendStatus(400);
    }

    var newGroup = new group.Group(
        group_id,
        group_name,
        group_description,
        group_users,
        group_creator,
        group_isPublic,
        group_creationTime
    );

    if (groups.insert(newGroup)) {
        res.sendStatus(201);
    } else {
        res.sendStatus(500);
    }

    res.sendStatus(201);
}

const doGet = function (req, res) {
    result = groups.getByUserId(undefined) // req.cookies.userId
    res.status(200).json({ result });
}

module.exports = { doPost, doGet }