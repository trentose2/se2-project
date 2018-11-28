const exam = require('./exam_class.js');

let db = new Array();

const insertExam = (e) => {
    if (e instanceof exam.Exam) {
        db.push(e);
        return true;
    } else {
        return false;
    }
};

const getAllExams = () => {
    //TODO creator check, waiting for cookies system
    if (db.length == 0) {
        return 'No exams found';
    } else {
        return db;
    }
};

const getExamById = (id) => {
    if (isNaN(id)) {
        return null;
    } else {
        for (let i = 0; i < db.length; i++) {
            if (db[i].getId() === id) {
                return db[i];
            }
        }
        return null;
    }
};

module.exports = {
    insertExam,
    getAllExams,
    getExamById
};