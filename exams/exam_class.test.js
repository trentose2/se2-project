const exam = require('./exam_class.js');

test('Exam creation', () => {
    expect(
        new exam.Exam('Name', 1, 2, 3)
    ).toBeInstanceOf(exam.Exam)
});

test('Get exam id', () => {
    expect(
        new exam.Exam('Name', 1, 2, 3).getId() - new exam.Exam('Name', 1, 2, 3).getId()
    ).toBe(-1)
});

test('Get exam name', () => {
    expect(
        new exam.Exam('Name', 1, 2, 3).getName()
    ).toBe('Name')
});

test('Get exam pool id', () => {
    expect(
        new exam.Exam('Name', 1, 2, 3).getPool()
    ).toBe(1)
});

test('Get exam group id', () => {
    expect(
        new exam.Exam('Name', 1, 2, 3).getGroup()
    ).toBe(2)
});

test('Get exam creator id', () => {
    expect(
        new exam.Exam('Name', 1, 2, 3).getCreator()
    ).toBe(3)
});

test('Exam creation time type', () => {
    expect(
        new exam.Exam('Name', 1, 2, 3).getCreationTime()
    ).toBeInstanceOf(Date)
});

test('Exam name setter and getter', () => {
    e = new exam.Exam('Name', 1, 2, 3);
    e.setName('New name');
    expect(    
        e.getName()
    ).toBe('New name')
});

test('Exam description setter and getter', () => {
    e = new exam.Exam('Name', 1, 2, 3);
    e.setDescription('Description');
    expect(    
        e.getDescription()
    ).toBe('Description')
});

test('Exam pool setter and getter', () => {
    e = new exam.Exam('Name', 1, 2, 3);
    e.setPool(5);
    expect(    
        e.getPool()
    ).toBe(5)
});

test('Exam group setter and getter', () => {
    e = new exam.Exam('Name', 1, 2, 3);
    e.setGroup(5);
    expect(    
        e.getGroup()
    ).toBe(5)
});

test('Exam taskPerPaper setter and getter', () => {
    e = new exam.Exam('Name', 1, 2, 3);
    e.setTasksPerPaper(5);
    expect(    
        e.getTasksPerPaper()
    ).toBe(5)
});

test('Exam startTime setter and getter', () => {
    e = new exam.Exam('Name', 1, 2, 3);
    e.setStartTime(0);
    expect(
        e.getStartTime()
    ).toBe(0)
});

test('Exam deadline setter and getter', () => {
    e = new exam.Exam('Name', 1, 2, 3);
    e.setDeadline(5);
    expect(    
        e.getDeadline()
    ).toBe(5)
});
