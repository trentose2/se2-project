//testing of the object user
const user=require('./user_class.js')

test('user creation', () =>
    expect(
        new user.User("a@b.com","c").constructor
    ).toBe(user.User)
);
test('user email creation went ok', () =>
    expect(
        new user.User('email','username').getEmail()
    ).toBe('email')
);
test('user username creation went ok', () =>
    expect(
        new user.User('email','username').getUsername()
    ).toBe('username')
);
test('id working', ()=>
    expect(
        new user.User('t','a').getId() - new user.User('t','a').getId()
    ).toBe(-1)
);
