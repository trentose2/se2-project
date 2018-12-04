//testing of the simulated db
const user = require('./user_class.js');
const db = require('./simulated_db.js');

test('POST on /user to insert of user', () =>
    expect(
        db.insertUser(new user.User('e','u','f','l'))
    ).toBe(true)
);
test('POST on /user not working insert of object', () =>
    expect(
        db.insertUser(8)
    ).toBe(false)
);
test('POST on /user to insert of user', () =>
    expect(
        db.insertUser(new user.User('e','u','f','l'))
    ).toBe(true)
);
test('GET on /users/{id} with proper id', () =>
    expect(
        db.getUserById(1)
    ).toBeInstanceOf(user.User)
);
test('GET on /users/{id} not working with non integer id', () =>
    expect(
        db.getUserById('pippo')
    ).toBe(null)
);
test('GET on /users/{id} not working with non-existing id', () =>
    expect(
        db.getUserById(420000)
    ).toBe(null)
);
//test('PUT on /users/{id} not working with existing id', () =>
//    expect(
//        db.updateUser(0,'New email','New username','New firstName','New lastName')
//    ).toBe(user.User)
//);
test('PUT on /users/{id} not working with non-existing id', () =>
    expect(
        db.updateUser(87897,'New email','New username','New firstName','New lastName')
    ).toBe(null)
);
test('DELETE on /users/{id} working with proper id', ()=>{
    expect(
        db.deleteUserById(1)
    ).toBe(true);
    expect(
        db.getAllUsers().length
    ).toBe(1);
});
test('DELETE on /users/{id} with non existing id', ()=>{
    expect(
        db.deleteUserById(420000)
    ).toBe(false);
    expect(
        db.getAllUsers().length
    ).toBe(1);
});
test('PUT on /users/{id} to update user information: should return updated user', () =>{
    u=new user.User('e1','u1','f1','l1');
    db.insertUser(u);
    id=u.getId();
    u.setEmail("email_new");
    db.updateUser(u);
    expect(db.getUserById(id).getEmail()).toEqual("email_new");
});
