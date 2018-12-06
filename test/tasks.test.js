const request = require('supertest');
const app = require('../app.js');
const db = require('../lib/db');
const tasks = require('../lib/tasks');

//app functionality
test('app module should be defined', () => {
    expect(app).toBeDefined();
});
test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
});
//wrong inputs
//get /v1/tasks/id
test('GET /v1/tasks/NOT A NUMBER should return 404', async ()=>{
    const response = await request(app).get('/v1/tasks/s');
    expect(response.statusCode).toBe(404);
});
test('GET /v1/tasks/non existing id should return 404', async ()=>{
    let id = db.tasks.getAllTasks().length +42;
    const response = await request(app).get('/v1/tasks/'+id);
    expect(response.statusCode).toBe(404);
});
// post /v1/tasks
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
test('POST /v1/tasks with  body with missing parameters should return 400 bad request', async ()=>{
    const response = await request(app)
        .post('/v1/tasks')
        .send(
            {
                "title": "bar",
                "type": "foo"
            }
        )
        .set('Accept', 'application/json');
        expect(response.statusCode).toBe(400);
});
test('POST /v1/tasks with  body with non-string  parameters  should return 400 bad request', async ()=>{
    const response = await request(app)
        .post('/v1/tasks')
        .send(
            {
                "title": "bar",
                "type": "foo",
                "assignement": 42
            }
        )
        .set('Accept', 'application/json');
        expect(response.statusCode).toBe(400);
});
// delete /v1/tasks/:id
test(' deleting a non existing task should return 404 not found', async ()=>{
    let non_ex =db.tasks.getAllTasks().length +100;
    const response = await request(app).delete('/v1/tasks/'+non_ex);
     expect(response.statusCode).toBe(404);

});
test('delete on v1/tasks/NOT A NUMBER should return 404 not found', async ()=>{
    const response = await request(app).delete('/v1/tasks/ciao');
     expect(response.statusCode).toBe(404);

});
// put /v1/tasks/id
test('PUT on task with wrong body should give 400 bad request', async ()=>{
    let title = "t1";
    let type = "ty1";
    let assignement = "ass1"

        let t = {
            id : undefined,
            title : title,
            type : type,
            assignement: assignement,
            creator: undefined,
            creationTime: new Date()
        }

    db.tasks.insertTask(t);
    const response = await request(app).put('/v1/tasks/'+t.id)
                                        .send({
                                            "fooo": "the answer",
                                            "bar": 42,
                                            "foobar":  "bar"
                                        })
                                        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);

});
test('PUT on task with body with missing parameters should give 400 bad request', async ()=>{
    let title = "t1";
    let type = "ty1";
    let assignement = "ass1"
    let t = {
        id : undefined,
        title : title,
        type : type,
        assignement: assignement,
        creator: undefined,
        creationTime: new Date()
    }
    db.tasks.insertTask(t);
    const response = await request(app).put('/v1/tasks/'+t.id)
                                        .send({
                                            "title": title,
                                            "assignement": "new assignement",
                                        })
                                        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(400);

});
test('PUT on task with correct body but with non-existing id in url should return 404', async ()=>{
    let title = "t1";
    let type = "ty1";
    let assignement = "ass1"
    let t = {
        id : undefined,
        title : title,
        type : type,
        assignement: assignement,
        creator: undefined,
        creationTime: new Date()
    }
    db.tasks.insertTask(t);
    id= db.tasks.getAllTasks().length +42;
    const response = await request(app).put('/v1/tasks/'+id)
                                        .send({
                                            "title": title,
                                            "assignement": "new assignement",
                                            "type": type
                                        })
                                        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(404);

});

//correct input

//post v1/tasks
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
//get v1/tasks/:id
test('given that a couple of tasks were created, GET /v1/tasks/0 should return 200 and an object', async ()=>{
    let t1 = {
        id : undefined,
        title : "title",
        type : "type",
        assignement: "assignement",
        creator: undefined,
        creationTime: new Date()
    }
    let t2 = {
        id : undefined,
        title : "title",
        type : "type",
        assignement: "assignement",
        creator: undefined,
        creationTime: new Date()
    }
    db.tasks.insertTask(t1);
     db.tasks.insertTask(t2);
     const response = await request(app).get('/v1/tasks/0');
     expect(response.statusCode).toBe(200);
     expect(response.body.Task).toBeDefined();
     expect(response.body.Task).toBeInstanceOf(Object);
});
//delete v1/tasks/:id
test('given that i created a task, deleting it should return the task i just created and 200 ok', async ()=>{
    let title = "deleteTitle";
    let assignement = "deleteAss";
    let type = "deleteType";
    let t = {
        id : undefined,
        title : title,
        type : type,
        assignement: assignement,
        creator: undefined,
        creationTime: new Date()
    }
    db.tasks.insertTask(t);
    const response = await request(app).delete('/v1/tasks/'+t.id);
     expect(response.statusCode).toBe(200);
     expect(response.body.Task).toBeDefined();
     expect(response.body.Task).toBeInstanceOf(Object);
});

// put v1/tasks/:id
test('PUT on task with modified title should change title, and not other attributes ', async ()=>{
    let title = "t1";
    let type = "ty1";
    let assignement = "ass1"
    let t = {
        id : undefined,
        title : title,
        type : type,
        assignement: assignement,
        creator: undefined,
        creationTime: new Date()
    }
    db.tasks.insertTask(t);
    const response = await request(app).put('/v1/tasks/'+t.id)
                                        .send({
                                            "title": "NEW TITLE",
                                            "assignement": assignement,
                                            "type":  type
                                        })
                                        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body.Task).toBeDefined();
    expect(response.body.Task.id).toEqual(t.id);
    expect(response.body.Task.title).toEqual("NEW TITLE");
    expect(response.body.Task.type).toEqual(type);
    expect(response.body.Task.assignement).toEqual(assignement);
});
test('PUT on task with modified type should change type, and not other attributes ', async ()=>{
    let title = "t1";
    let type = "ty1";
    let assignement = "ass1"
    let t = {
        id : undefined,
        title : title,
        type : type,
        assignement: assignement,
        creator: undefined,
        creationTime: new Date()
    }
    db.tasks.insertTask(t);
    const response = await request(app).put('/v1/tasks/'+t.id)
                                        .send({
                                            "title": title,
                                            "assignement": assignement,
                                            "type":  "New Type"
                                        })
                                        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body.Task).toBeDefined();
    expect(response.body.Task.id).toEqual(t.id);
    expect(response.body.Task.title).toEqual(title);
    expect(response.body.Task.type).toEqual("New Type");
    expect(response.body.Task.assignement).toEqual(assignement);
});
test('PUT on task with modified assignement should change assignement, and not other attributes ', async ()=>{
    let title = "t1";
    let type = "ty1";
    let assignement = "ass1"
    let t = {
        id : undefined,
        title : title,
        type : type,
        assignement: assignement,
        creator: undefined,
        creationTime: new Date()
    }
    db.tasks.insertTask(t);
    const response = await request(app).put('/v1/tasks/'+t.id)
                                        .send({
                                            "title": title,
                                            "assignement": "new assignement",
                                            "type":  type
                                        })
                                        .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body.Task).toBeDefined();
    expect(response.body.Task.id).toEqual(t.id);
    expect(response.body.Task.title).toEqual(title);
    expect(response.body.Task.type).toEqual(type);
    expect(response.body.Task.assignement).toEqual("new assignement");
});

//testing on the working layer
//correct inputs
test('posting of 3 correct strings works', () =>
    expect(
        tasks.methods.doPost('t1','a1','t1')
    ).toBeDefined()
);
test('get by id working', ()=>
    expect(
        tasks.methods.doGetById(3)
    ).toBeDefined()
);
test('delete with proper id working', ()=>{
    expect(tasks.methods.doDelete(1)).toBe(true);
});
//wrong inputs
test('posting of 3 incorrect param does not work, 1st param', () =>
    expect(
        tasks.methods.doPost(7,'a1','t1')
    ).toBe(null)
);
test('posting of 3 incorrect param does not work, 2nd param', () =>
    expect(
        tasks.methods.doPost('t2',7,'t2')
    ).toBe(null)
);
test('posting of 3 incorrect param does not work, 3rd param', () =>
    expect(
        tasks.methods.doPost('t3','a3',7)
    ).toBe(null)
);
test('delete with wrong id not working', ()=>{
    expect(tasks.methods.doDelete(42000)).toBe(false);
});
