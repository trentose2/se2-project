const exams = require('./exam_class.js');
const db = require('./db.js');

const postExam = (req, res) => {
    let name = req.body.name;
    let pool = req.body.pool;
    let group = req.body.group;
    let creator = req.body.creator;

    if (typeof name == 'string' && !isNaN(parseInt(pool, 10)) && !isNaN(parseInt(group, 10)) && !isNaN(parseInt(creator, 10)) && Object.keys(req.body).length === 4) {
        let Exam = new exams.Exam(name, parseInt(pool, 10), parseInt(group, 10), parseInt(creator, 10));
        db.insertExam(Exam);
        res.status(201).json({Exam});
    } else {
        res.sendStatus(400);
    }
};

const getAllExams = (req, res) => {
    let Exams = db.getAllExams();
    res.status(200).json({Exams});
};

module.exports = {
    postExam,
    getAllExams
};