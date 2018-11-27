const request = require('supertest');
const app = require('../app.js');
const task = require('./task_class.js');
const db = require('./simulated_db');

test('app module should be defined', () => {
    expect(app).toBeDefined();
});
test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
});
test('GET /v1/tasks/NOT A NUMBER should return 404', async ()=>{
    const response = await request(app).get('/v1/tasks/s');
    expect(response.statusCode).toBe(404);
});
test('POST /v1/tasks with correct body should return an object', async ()=>{
    const response = await request(app)
    .post('/v1/tasks')
    .send({
       "title": "foo",
       "assignement": "bar",
       "type": "multiple"
    })
    .set('Accept', 'application/json');
  expect(response.statusCode).toBe(201);
  expect(response.body.Task).toBeDefined();
  expect(response.body.Task).toBeInstanceOf(Object);
});
test('POST /v1/tasks with wrong body should return 400 bad request', async ()=>{
    const response = await request(app)
        .post('/v1/tasks')
        .send(
            {
                "title": 7,
                "type": "foo",
                "foo": "bar"
            }
        )
        .set('Accept', 'application/json');
        expect(response.statusCode).toBe(400);
});
test('given that a couple of tasks were created, GET /v1/tasks/0 should return 200 and an object', async ()=>{
     db.insertTask(new task.Task('foo','bar','foo'));
     db.insertTask(new task.Task('foo1','bar1','foo1'));
     const response = await request(app).get('/v1/tasks/0');
     expect(response.statusCode).toBe(200);
     expect(response.body.Task).toBeDefined();
     expect(response.body.Task).toBeInstanceOf(Object);
});
test('given that i created a task, deleting it should return the task i just created and 200 ok', async ()=>{
    t= new task.Task("deleteTitle", "deleteAss","deleteType");
    db.insertTask(t);
    const response = await request(app).delete('/v1/tasks/'+t.getId());
     expect(response.statusCode).toBe(200);
     expect(response.body.Task).toBeDefined();
     expect(response.body.Task).toBeInstanceOf(Object);
});
test(' deleting a non existing task should return 404 not found', async ()=>{

    const response = await request(app).delete('/v1/tasks/420000');
     expect(response.statusCode).toBe(404);

});
