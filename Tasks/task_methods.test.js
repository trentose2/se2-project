const task = require('./task.js')
const db = require('./simulated_db.js')
const methods = require('./task_methods.js')

test('posting of 3 correct strings works', () =>
    expect(
        methods.doPost('t1','a1','t1')
    ).toBeInstanceOf(task.Task)
);
test('posting of 3 incorrect param does not work, 1st param', () =>
    expect(
        methods.doPost(7,'a1','t1')
    ).toBe(null)
);
test('posting of 3 incorrect param does not work, 2nd param', () =>
    expect(
        methods.doPost('t2',7,'t2')
    ).toBe(null)
);
test('posting of 3 incorrect param does not work, 3rd param', () =>
    expect(
        methods.doPost('t3','a3',7)
    ).toBe(null)
);
test('memorization of tasks working', () =>
        expect(
            db.getAllTasks().length
        ).toBe(6)
);
f();
test('get by id working', ()=>
    expect(
        methods.doGetById(3)
    ).toBeInstanceOf(task.Task)
);

function f(){
    for(i=0; i<5; i++){
        methods.doPost('a'+i, 'b'+i, 'c'+i);
    }
}
