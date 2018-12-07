const db = require('./db.js');

const getById = function (req, res) {
    let id = req.params.id;

    let user = db.users.selectById(id);
    if (user == null) {
        res.sendStatus(404);
    }
    else {
        res.status(200).json(user);
    }
};

const post = function (req, res) {
    let user = {
        email: req.body.email,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        registrationTime: Date.now()
    };


    if (!(typeof user.email == 'string')
        || !(typeof user.username == 'string')
        || !(typeof user.firstName == 'string')
        || !(typeof user.lastName == 'string')) {
        res.sendStatus(405);
    }
    else {
        db.users.insert(user);
        res.status(201).json(user);
    }
};

const put = function (req, res) {
    let user = {
        id: req.params.id,
        email: req.body.email,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };

    if (!(typeof user.email == 'string')
        || !(typeof user.username == 'string')
        || !(typeof user.firstName == 'string')
        || !(typeof user.lastName == 'string')
        || isNaN(user.id)) {
        res.sendStatus(400);
    } else {
        let updatedUser = db.users.update(user);
        if (updatedUser != null) {
            res.status(200).json(updatedUser);
        } else {
            res.sendStatu(404);
        }
    }
};

const deleteUser = function (req, res) {
    let id = req.params.id;
    if (db.users.delete(id)) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
};

module.exports = { post, getById, put, deleteUser };
