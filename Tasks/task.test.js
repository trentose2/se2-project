//testing of the object task
const task=require('./task_class.js')

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
test('task title modification went ok', ()=>{
    t= new task.Task("t1","a1","t1");
    t.setTitle("t_modified");
    expect(t.getTitle()).toEqual("t_modified");
});
test('task assignement modification went ok', ()=>{
    t= new task.Task("t1","a1","t1");
    t.setAssignement("a_modified");
    expect(t.getAssignement()).toEqual("a_modified");
});
test('task type modification went ok', ()=>{
    t= new task.Task("t1","a1","t1");
    t.setType("t_modified");
    expect(t.getType()).toEqual("t_modified");
});
test('creator setting with id went ok', ()=>{
    t= new task.Task("t1","a1","t1");
    t.setCreator(1);
    expect(t.getCreator()).toBe(1);
});
test('creator setting with not a number id went wrong', ()=>{
    t= new task.Task("t1","a1","t1");
    t.setCreator("ciao");
    expect(t.getCreator()).toBe(undefined);
});
