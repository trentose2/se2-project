const db = require('./db.js')

const postExam = (req, res) => {
    let exam = {
        id: undefined,
        name: req.body.name,
        description: req.body.description,
        pool: req.body.pool,
        group: req.body.group,
        tasksPerPaper: req.body.tasksPerPaper,
        startTime: req.body.startTime,
        deadline: req.body.deadline,
        creator: req.query.userId,
        creationTime: Date.now()
    };


    if (typeof exam.name === 'string'
        && typeof exam.description === 'string'
        && Number.isInteger(exam.pool)
        && Number.isInteger(exam.group)
        && Number.isInteger(exam.tasksPerPaper)
        && Number.isInteger(exam.startTime)
        && Number.isInteger(exam.deadline)
        && !isNaN(exam.creator)
    ) {

        let examId = db.exams.insert(exam);

        let group = db.groups.selectById(exam.group);
        let users = group.users;

        users.forEach(u => {

            let assignedTasks = db.pools.selectRandomTasks(exam.pool, exam.tasksPerPaper);

            let paper = {
                id: undefined,
                exam: examId,
                user: u,
                tasks: assignedTasks,
                mark: undefined
            };

            db.papers.insert(paper);
        });

        res.status(201).json(exam);
    } else {
        res.sendStatus(400);
    }
}

const getAllExams = (req, res) => {
    res.status(200).json(db.exams)
}

module.exports = {
    postExam,
    getAllExams
}
