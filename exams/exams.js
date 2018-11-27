const exams = require('./exam_class.js');

const doPost = (req, res) => {
    let name = req.body.name;
    let pool = req.body.pool;
    let group = req.body.group;
    let creator = req.body.creator;

    if (typeof name == 'string' && typeof pool == 'number' && typeof group == 'number' && typeof creator == 'number' && Object.keys(req.body).length === 4) {
        let Exam = new exams.Exam(name, pool, group, creator);
        res.status(201).json({Exam});
    } else {
        res.sendStatus(400);
    }
};

module.exports = {doPost};