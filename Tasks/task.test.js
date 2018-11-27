//testing of the object task
const task=require('./task.js')

test('task creation', () =>
expect(
    new task.Task("a","b","c").constructor
).toBe(task.Task)
);
test('task title creation went ok', () =>
expect(
    new task.Task('title','assignement','type').getTitle()
).toBe('title')
);
test('task assignement creation went ok', () =>
expect(
    new task.Task('title','assignement','type').getAssignement()
).toBe('assignement')
);
test('task type creation went ok', () =>
expect(
    new task.Task('title','assignement','type').getType()
).toBe('type')
);
test('id working', ()=>
expect(
    new task.Task('t','a','t').getId() - new task.Task('t','a','t').getId()
).toBe(-1)
);
