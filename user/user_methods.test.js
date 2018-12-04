const user = require('./user_class.js')
const db = require('./simulated_db.js')
const methods = require('./user_methods.js')

test('posting of 2 correct strings works', () =>
    expect(
        methods.doPost('e1','u1','f1','l1')
    ).toBeInstanceOf(user.User)
);
test('posting of incorrect param does not work, 1st param', () =>
    expect(
        methods.doPost(2,'u2','f2','l2')
    ).toBe(null)
);
test('posting of incorrect param does not work, 2nd param', () =>
    expect(
        methods.doPost('e3',7,'f3','f4')
    ).toBe(null)
);
test('posting of incorrect param does not work, 3rd param', () =>
    expect(
        methods.doPost('e3','u3',3242,'f4')
    ).toBe(null)
);
test('posting of incorrect param does not work, 4th param', () =>
    expect(
        methods.doPost('e3','u4','f3',324)
    ).toBe(null)
);

f();

test('get by id working', ()=>
    expect(
        methods.doGetById(3)
    ).toBeInstanceOf(user.User)
);

//test('update user with correct param work', () =>
//    expect(
//        methods.doPut(0,'name','username','firstName','lastName')
//    ).toBe(user.User)
//);
test('update user with an incorrect param not work', () =>
    expect(
        methods.doPut(1,'name',32842398,'firstName','lastName')
    ).toBe(null)
);
test('update user with two incorrect param not work', () =>
    expect(
        methods.doPut(1,'name',32842398,'firstName',43349)
    ).toBe(null)
);
test('update user with a boolean param not work', () =>
    expect(
        methods.doPut(1,'name',true,'firstName','lastName')
    ).toBe(null)
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
test('deleting a string id not working', () =>
    expect(
        methods.doDeleteById("ciao")
    ).toBe(false)
);
test('deleting a boolean id not working', () =>
    expect(
        methods.doDeleteById(true)
    ).toBe(false)
);



function f(){
    for(i=0; i<5; i++){
        methods.doPost('a'+i, 'b'+i, 'c'+i, 'd'+i);
    }
}
