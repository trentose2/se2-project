const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = require('./lib/users.js');
const groups = require('./lib/groups.js');
const tasks = require('./lib/tasks.js');
const pools = require('./lib/pools.js');
const exams = require('./lib/exams.js');
const papers = require('./lib/papers.js');
// const submissions = require('./lib/submissions.js');
// const reviews = require('./lib/reviews.js');

// health check
app.get('/', (req, res) => {
    res.json({ msg: 'Hello :)' });
});

// groups
app.post('/v1/groups', groups.post);
app.get('/v1/groups', groups.getAllGroups);
app.get('/v1/groups/:id', groups.getGroupById);

// pools
app.get('/v1/pools', pools.getPools);
app.post('/v1/pools', pools.postPools);
app.get('/v1/pools/:id', pools.getPool);

// tasks
app.get('/v1/tasks/:id', tasks.getById);
app.post('/v1/tasks', tasks.post);
app.delete('/v1/tasks/:id', tasks.deleteTask);
app.get('/v1/tasks', tasks.getByCreator);
app.put('/v1/tasks/:id', tasks.putTask);

// exams
app.post('/v1/exams', exams.postExam);
app.get('/v1/exams', exams.getAllExams);

// users
app.post('/v1/users', users.post);
app.get('/v1/users/:id', users.getById);
app.put('/v1/users/:id', users.put);
app.delete('/v1/users/:id', users.deleteUser);

// papers
app.get('/v1/papers', papers.getPapersByUserEmail);
app.get('/v1/papers/:id', papers.getPaperById);

// keep at the end of the file
module.exports = app;
