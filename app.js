const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const groups = require('./groups/groups.js');
const task = require('./Tasks/tasks.js');
const exams = require('./exams/exams.js');
const user = require('./user/users.js');
const pools = require('./pools/unpacking.js');
const papers = require('./papers/papers.js')

// health check
app.get('/', (req, res) => {
    res.json({ msg: 'Hello :)' });
});

// groups
app.post('/v1/groups', groups.post);
app.get('/v1/groups', groups.getAllGroups);
app.get('/v1/groups/:id', groups.getGroupById);


// tasks
app.get('/v1/tasks/:id', (req, res) => {
    task.getById(req, res);
});
app.post('/v1/tasks', (req, res) => {
    task.post(req, res);
});
app.delete('/v1/tasks/:id', (req, res) => {
    task.delete(req, res);
});

// exams
app.post('/v1/exams', (req, res) => {
    exams.postExam(req, res);
});
app.get('/v1/exams', (req, res) => {
    exams.getAllExams(req, res);
});

// user
app.post('/v1/users', (req, res) => {
    user.post(req, res);
});
app.get('/v1/users/:id', (req, res) => {
    user.getById(req, res);
});
app.put('/v1/users/:id', (req, res) => {
    user.put(req, res);
});
app.delete('/v1/users/:id', (req, res) => {
    user.delete(req, res);
});

// pools
app.post('/v1/pools', pools.doPost);
app.get('/v1/pools', pools.doGet);

// papers
app.get('/v1/papers', papers.getPapersByUserEmail);

// keep at the end of the file
module.exports = app;
