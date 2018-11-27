const request = require('supertest');
const app = require('../app.js');

test('Creating a valid pool should return with a 201 status code', async () => {
    const body = {
        "name": "Web Programming Tasks",
        "description": "This pool contains tasks related to web programming.",
        "tasks": [123, 234, 345, 456],
        "public": true
    };
    const response = await request(app)
        .post('/v1/pools')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(body);
    expect(response.statusCode).toBe(201);
});

test('Creating a pool with a name that isn\'t a string should return 400 status code', async () => {
    const body = {
        "name": 123456789,
        "description": "This pool contains tasks related to web programming.",
        "tasks": [123, 234, 345, 456],
        "public": true
    };
    const response = await request(app)
        .post('/v1/pools')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(body);
    expect(response.statusCode).toBe(400);
});

test('Creating a pool with a description that isn\'t a string should return 400 status code', async () => {
    const body = {
        "name": "Web Programming Tasks",
        "description": 123456789,
        "tasks": [123, 234, 345, 456],
        "public": true
    };
    const response = await request(app)
        .post('/v1/pools')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(body);
    expect(response.statusCode).toBe(400);
});

test('Creating a pool with tasks that aren\'t represented as a list of integers should return 400 status code', async () => {
    const body = {
        "name": "Web Programming Tasks",
        "description": "This pool contains tasks related to web programming.",
        "tasks": "not a list of integers",
        "public": true
    };
    const response = await request(app)
        .post('/v1/pools')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(body);
    expect(response.statusCode).toBe(400);
});

test('Creating a pool with a value for creator which is not a boolean should return 400 status code', async () => {
    const body = {
        "name": "Web Programming Tasks",
        "description": "This pool contains tasks related to web programming.",
        "tasks": [123, 234, 345, 456],
        "public": "true"
    };
    const response = await request(app)
        .post('/v1/pools')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(body);
    expect(response.statusCode).toBe(400);
});

test('GET /v1/pools should return 200', async () => {
    const response = await request(app)
        .get('/v1/pools')
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
});
