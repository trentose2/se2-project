const user = require('./user_class.js')
const db = require('./simulated_db.js')
const methods = require('./user_methods.js')

test('posting of 2 correct strings works', () =>
    expect(
        methods.doPost('e1','u1')
    ).toBeInstanceOf(user.User)
);
test('posting of 2 incorrect param does not work, 1st param', () =>
    expect(
        methods.doPost(2,'u1')
    ).toBe(null)
);
test('posting of 2 incorrect param does not work, 2nd param', () =>
    expect(
        methods.doPost('e2',7)
    ).toBe(null)
);

f();

test('get by id working', ()=>
    expect(
        methods.doGetById(3)
    ).toBeInstanceOf(user.User)
);

test('deleting a proper id working', () =>
    expect(
        methods.doDeleteById(2)
    ).toBe(true)
);

test('deleting a wrong id not working', () =>
    expect(
        methods.doDeleteById(83264)
    ).toBe(false)
);




function f(){
    for(i=0; i<5; i++){
        methods.doPost('a'+i, 'b'+i, 'c'+i);
    }
}
