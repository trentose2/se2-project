const request = require('supertest');

const app = require('./api.js')


test('Creating a valid group should return 201', () => {
    const groupBody = {
        "name": "MFDM",
        "description": "This group is formed by Mario, Franco, Daniel, Matteo",
        "users": [120, 100, 24, 34],
        "public": true
    };

    const response = await request(app).post('/v1/groups').send(groupBody)
        .set('Accept', 'application/json')
    expect(response.statusCode).toBe(201);
});

// test('Creating a group with a name that isn\'t a string should return 405', () => {
//     const groupBody = {
//         "name": 102415,
//         "description": "This group is formed by Mario, Franco, Daniel, Matteo",
//         "users": [120, 100, 24, 34],
//         "public": true
//     };

//     app.post('/groups').send(groupBody)
//         .set('Accept', 'application/json')
//         .set('Content-Type', 'application/json')
//         .expect(405)
//         .end((err, res) => {
//             if (err && res.error) {
//                 console.log(res.error);
//             }
//             done(err);
//         });
// });