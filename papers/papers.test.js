const request = require('supertest');
const app = require('../app');

test('GET /v1/papers?email=invalidEmail with an invalid email should return 404', async () => {

    const response = await request(app)
        .get('/v1/papers?email=1')
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(404);
});