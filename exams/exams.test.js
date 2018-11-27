const request = require('supertest'); 

const exam = require('./exam_methods.js');
const app = require('../app.js');

test('Exam POST /v1/exams', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": "Name",
            "pool": 1,
            "group": 2,
            "creator": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(201);
    expect(response.body.Exam).toBeDefined();
    expect(response.body.Exam).toBeInstanceOf(Object);
});

test('Exam POST /v1/exams with wrong name request type', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": 0,
            "pool": 1,
            "group": 2,
            "creator": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong pool request type', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": "Name",
            "pool": "Nice",
            "group": 2,
            "creator": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong group request type', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": "Name",
            "pool": 1,
            "group": "Nice",
            "creator": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong creator request type', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": "Name",
            "pool": 1,
            "group": 2,
            "creator": "Nice"
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong name request field', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "random": "Name",
            "pool": 1,
            "group": 2,
            "creator": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong name request field', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": "Name",
            "random": 1,
            "group": 2,
            "creator": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong name request field', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": "Name",
            "pool": 1,
            "random": 2,
            "creator": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong creator request field', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": "Name",
            "pool": 1,
            "group": 2,
            "random": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with missing request fields', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "pool": 1,
            "group": 2,
            "creator": 3
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with more request fields', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            "name": "Name",
            "pool": 1,
            "group": 2,
            "creator": 3,
            "random": 4
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});