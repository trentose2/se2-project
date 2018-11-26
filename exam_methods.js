const exams = require('./exam_class.js');

conts doPost = async (res, req) => {
    const name = req.body.name;
    const pool = req.body.pool;
    const group = req.body.group;
    const creator = req.body.creator;
    
    exam = new exams.Exam(name, pool, group, creator);
    //return exam.getId();
};