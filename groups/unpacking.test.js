const request = require('supertest');
const app = require('../app');

test('GET /v1/groups should return 200', async () => {
    const response = await request(app)
        .get('/v1/groups')
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
});

test('Creating a valid group should return with a 201 status code', async () => {
    const groupBody = {
        "name": "MFDM",
        "description": "This group is formed by Mario, Franco, Daniel, Matteo",
        "users": [120, 100, 24, 34],
        "creator": 1,
        "public": true
    }
    const response = await request(app)
        .post('/v1/groups')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(groupBody);
    expect(response.statusCode).toBe(201);
});

test('Creating a group with a name that isn\'t a string should return 400 status code', async () => {
    const groupBody = {
        "name": 102415,
        "description": "This group is formed by Mario, Franco, Daniel, Matteo",
        "users": [120, 100, 24, 34],
        "creator": 1,
        "public": true
    };

    const response = await request(app)
        .post('/v1/groups')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(groupBody);
    expect(response.statusCode).toBe(400);
});

test('Creating a group with a description that isn\'t a string should return 400 status code', async () => {
    const groupBody = {
        "name": "MFDM",
        "description": 1890,
        "users": [120, 100, 24, 34],
        "creator": 1,
        "public": true
    };

    const response = await request(app)
        .post('/v1/groups')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(groupBody);
    expect(response.statusCode).toBe(400);
});

test('Creating a group with users that aren\'t represented as a list of integers should return 400 status code', async () => {
    const groupBody = {
        "name": "MFDM",
        "description": "This group is formed by Mario, Franco, Daniel, Matteo",
        "users": "lul",
        "creator": 1,
        "public": true
    };

    const response = await request(app)
        .post('/v1/groups')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(groupBody);
    expect(response.statusCode).toBe(400);
});

test('Creating a group with a creator that isn\'t represented as a number should return 405 status code', async () => {
    const groupBody = {
        "name": "MFDM",
        "description": "This group is formed by Mario, Franco, Daniel, Matteo",
        "users": [120, 100, 24, 34],
        "creator": "cane",
        "public": true
    };

    const response = await request(app)
        .post('/v1/groups')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(groupBody);
    expect(response.statusCode).toBe(400);
});