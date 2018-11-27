//testing of the simulated db
const task = require('./task.js');
const db = require('./simulated_db.js');

test('insert of task working', () =>
expect(
    db.insertTask(new task.Task('t','a','t'))
).toBe(true)
);
test('insert of object not working', () =>
expect(
    db.insertTask(7)
).toBe(false)
);
test('insert of task working', () =>
expect(
    db.insertTask(new task.Task('t','a','t'))
).toBe(true)
);
test('memorization working', () =>
expect(

    db.getAllTasks().length
).toBe(2)
);
test('get by id working with proper id', () =>
expect(
    db.getTaskById(1)
).toBeInstanceOf(task.Task)
);
test('get by id not working with non integer id', () =>
expect(
    db.getTaskById('ciao')
).toBe(null)
);
test('get by id not working with non-existing id', () =>
expect(
    db.getTaskById(420000)
).toBe(null)
);
