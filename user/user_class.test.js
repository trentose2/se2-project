//testing of the object user
const user=require('./user_class.js')

test('user creation', () =>
    expect(
        new user.User("a@b.com","c", "ambo", "pippo").constructor
    ).toBe(user.User)
);
test('user email creation went ok: get email', () =>
    expect(
        new user.User('email','username', 'firstName', 'lastName').getEmail()
    ).toBe('email')
);
test('user username creation went ok: get username', () =>
    expect(
        new user.User('email','username', 'firstName', 'lastName').getUsername()
    ).toBe('username')
);
test('user username creation went ok: get firstName', () =>
    expect(
        new user.User('email','username', 'firstName', 'lastName').getFirstName()
    ).toBe('firstName')
);
test('user username creation went ok: get lastName', () =>
    expect(
        new user.User('email','username', 'firstName', 'lastName').getLastName()
    ).toBe('lastName')
);
test('user email creation went ok: set email', () => {
    u = new user.User('email','username', 'firstName', 'lastName');
    u.setEmail('New email');
    expect(
        u.getEmail()
    ).toBe('New email')
});
test('user email creation went ok: set username', () => {
    u = new user.User('email','username', 'firstName', 'lastName');
    u.setUsername('New username');
    expect(
        u.getUsername()
    ).toBe('New username')
});
test('user email creation went ok: set firstName', () => {
    u = new user.User('email','username', 'firstName', 'lastName');
    u.setFirstName('New firstName');
    expect(
        u.getFirstName()
    ).toBe('New firstName')
});
test('user email creation went ok: set lastName', () => {
    u = new user.User('email','username', 'firstName', 'lastName');
    u.setLastName('New lastName');
    expect(
        u.getLastName()
    ).toBe('New lastName')
});
test('id working', ()=>
    expect(
        new user.User('t','a').getId() - new user.User('t','a').getId()
    ).toBe(-1)
);
