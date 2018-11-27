const db = require('./db.js');
const exam = require('./exam_class.js');

test('Get all exams (no inserted)', () => {
    expect(
        db.getAllExams()
    ).toEqual('No exams found')
});

test('Insert exam into database', () => {
    expect(
        db.insertExam(new exam.Exam('Name', 1, 2, 3))
    ).toBe(true)
});

test('Insert exam into database failure', () => {
    expect(
        db.insertExam(new Date())
    ).toBe(false)
});

test('Get an existing exam', () => {
    expect(
        db.getExamById(0)
    ).toBeInstanceOf(exam.Exam)
});

test('Get a non existing exam', () => {
    expect(
        db.getExamById(-1)
    ).toBeNull()
});

test('Get all exams', () => {
    db.insertExam(new exam.Exam('Name2', 1, 2, 3))
    expect(
        db.getAllExams().length
    ).toBe(2)
});