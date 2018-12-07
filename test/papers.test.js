const request = require('supertest');
const app = require('../app');

test('GET /v1/papers?email=invalidEmail with an invalid email should return 404', async () => {

    const response = await request(app)
        .get('/v1/papers?email=1')
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(404);
});

test('GET /v1/papers/:id should return 200 if paper with specified id exists', async () => {
    const response = await request(app)
        .get('/v1/papers/0')
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
});
