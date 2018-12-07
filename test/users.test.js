const request = require('supertest');
const app = require('../app.js');

test('posting of 2 correct strings works', async () => {
    let user = {
        email: 'e1',
        username: 'u1',
        firstName: 'f1',
        lastName: 'l1'
    };

    const response = await request(app)
        .post('/v1/users')
        .send(user)
        .set('Accept', 'application/json');

    expect(response.statusCode).toBe(201);

    // expect(
    //     methods.doPost('e1', 'u1', 'f1', 'l1')
    // ).toBeInstanceOf(user.User)
});
test('posting of incorrect param does not work, 1st param', async () => {
    let user = {
        email: 2,
        username: 'u1',
        firstName: 'f1',
        lastName: 'l1'
    };

    const response = await request(app)
        .post('/v1/users')
        .send(user)
        .set('Accept', 'application/json');

    expect(response.statusCode).toBe(405);


    // expect(
    //     methods.doPost(2, 'u2', 'f2', 'l2')
    // ).toBe(null)
});
test('posting of incorrect param does not work, 2nd param', async () => {
    let user = {
        email: 'e1',
        username: 7,
        firstName: 'f1',
        lastName: 'l1'
    };

    const response = await request(app)
        .post('/v1/users')
        .send(user)
        .set('Accept', 'application/json');

    expect(response.statusCode).toBe(405);

    // expect(
    //     methods.doPost('e3', 7, 'f3', 'f4')
    // ).toBe(null)
});

// test('posting of incorrect param does not work, 3rd param', async () =>
//     //TODO request(app)...
//     expect(
//         methods.doPost('e3', 'u3', 3242, 'f4')
//     ).toBe(null)
// );


// test('posting of incorrect param does not work, 4th param', async () =>
//     //TODO request(app)...

//     // expect(
//     //     methods.doPost('e3', 'u4', 'f3', 324)
//     // ).toBe(null)
// );

test('get by id working', async () => {
    const response = await request(app).get('/v1/users/0');
    expect(response.statusCode).toBe(200);
    // expect(
    //     methods.doGetById(3)
    // ).toBeInstanceOf(user.User)
});

test('get by an non-existing id not working', async () => {
    const response = await request(app).get('/v1/users/372342');
    expect(response.statusCode).toBe(404);
    // expect(
    //     methods.doGetById(3)
    // ).toBeInstanceOf(user.User)
});

test('update user with correct param work', async () => {
    let user = {
        email: 'name',
        username: 'username',
        firstName: 'firstName',
        lastName: 'lastName'
    };

    const response = await request(app)
        .put('/v1/users/0')
        .send(user)
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);

    //    expect(
    //        methods.doPut(0,'email','username','firstName','lastName')
    //    ).toBe(user.User)
});

test('update user with not-correct param not work', async () => {
    let user = {
        email: 2131,
        username: 'username',
        firstName: 'firstName',
        lastName: 'lastName'
    };

    const response = await request(app)
        .put('/v1/users/0')
        .send(user)
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('update user with non-existing id not work', async () => {
    let user = {
        email: 'name',
        username: 'username',
        firstName: 'firstName',
        lastName: 'lastName'
    };

    const response = await request(app)
        .put('/v1/users/3235345')
        .send(user)
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(404);
});

// test('update user with an incorrect param not work', async () =>
//     TODO request(app)...
//     expect(
//         methods.doPut(1, 'name', 32842398, 'firstName', 'lastName')
//     ).toBe(null)
// );

// test('update user with two incorrect param not work', async () =>
//     TODO request(app)...
//     expect(
//         methods.doPut(1, 'name', 32842398, 'firstName', 43349)
//     ).toBe(null)
// );

// test('update user with a boolean param not work', async () =>
//     TODO request(app)...
//     expect(
//         methods.doPut(1, 'name', true, 'firstName', 'lastName')
//     ).toBe(null)
// );

test('deleting a proper id working', async () => {
    const response = await request(app).del('/v1/users/2');
    expect(response.statusCode).toBe(200);

    // expect(
    //     methods.doDeleteById(2)
    // ).toBe(true)
});
test('deleting a wrong id not working', async () => {
    const response = await request(app).del('/v1/users/83264');
    expect(response.statusCode).toBe(404);

    // expect(
    //     methods.doDeleteById(83264)
    // ).toBe(false)
});

// test('deleting a string id not working', async () =>
//     TODO request(app)...
//     expect(
//         methods.doDeleteById("ciao")
//     ).toBe(false)
// );

// test('deleting a boolean id not working', async () =>
//     TODO request(app)...
//     expect(
//         methods.doDeleteById(true)
//     ).toBe(false)
// );
