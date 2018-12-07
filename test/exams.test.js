const request = require('supertest');

const app = require('../app.js');

// test('Exam GET /', async () => {
//     const response = await request(app).get('/');
//     expect(response.statusCode).toBe(200);
// });

// test('Exam GET /v1/exams (no exam yet)', async () => {
//     const response = await request(app)
//         .get('/v1/exams')
//         .set('Accept', 'application/json');
//         expect(response.statusCode).toBe(200);
//         expect(response.body.Exams).toEqual('No exams found');
// });

test('Exam POST /v1/exams?userId=0', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=0')
        .send({
            'name': 'Name',
            'description': 'desc',
            'pool': 0,
            'group': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(201);
});

test('Exam POST /v1/exams with wrong name request type', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=0')
        .send({
            'name': 123,
            'description': 'desc',
            'pool': 0,
            'group': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong pool request type', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=0')
        .send({
            'name': 'Name',
            'description': 'desc',
            'pool': 'Nice',
            'group': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong group request type', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=0')
        .send({
            'name': 'Name',
            'description': 'desc',
            'pool': 0,
            'group': 'Nice',
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong creator request type', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=Nice')
        .send({
            'name': 'Name',
            'description': 'desc',
            'pool': 0,
            'group': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong name request field', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=0')
        .send({
            'random': 'Name',
            'description': 'desc',
            'pool': 0,
            'group': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong name request field', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=0')
        .send({
            'name': 'Name',
            'random': 'desc',
            'pool': 0,
            'group': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong name request field', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=0')
        .send({
            'name': 'Name',
            'description': 'desc',
            'random': 0,
            'group': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with wrong creator request field', async () => {
    const response = await request(app)
        .post('/v1/exams?userId=0')
        .send({
            'name': 'Name',
            'description': 'desc',
            'pool': 0,
            'random': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam POST /v1/exams with missing request fields', async () => {
    const response = await request(app)
        .post('/v1/exams')
        .send({
            'name': 'Name',
            'pool': 0,
            'tasksPerPaper': 2,
            'startTime': 0,
            'deadline': 0
        })
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);
});

test('Exam GET /v1/exams', async () => {
    const response = await request(app)
        .get('/v1/exams')
        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
});
