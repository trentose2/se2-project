const db = require('./db.js');

const getPapersByUserEmail = function (req, res) {
    let email = req.query.email;

    let user = db.users.selectUserByEmail(email);
    if (user == null) {
        res.status(404).json('No user found for that email');
    } else {
        let papers = db.papers.selectPapersByUserId(user);
        res.status(200).json(papers);
    }
};

const getPaperById = function (req, res) {
    let paper = db.papers.selectById(req.params.id);
    if (paper == null) {
        res.sendStatus(404);
    } else {
        res.status(200).json(paper);
    }
};

module.exports = { getPapersByUserEmail, getPaperById };
