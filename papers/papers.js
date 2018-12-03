const db = require('./db/db.js')
const usersDb = require('../user/simulated_db')

const getPapersByUserEmail = function (req, res) {

    let email = req.query.email;

    user = usersDb.selectUserByEmail(email);
    if (user == null) {
        res.status(404).json("No user found for that email")
    } else {
        papers = db.selectPapersByUserId(user);
        res.status(200).json(papers);
    }
}

module.exports = { getPapersByUserEmail }