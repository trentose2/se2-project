const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const users = require('./lib/users.js');
const groups = require('./lib/groups.js');
// const tasks = require('./lib/tasks.js');
const pools = require('./lib/pools.js');
// const exams = require('./lib/exams.js');
// const papers = require('./lib/papers.js');
// const submissions = require('./lib/submissions.js');
// const reviews = require('./lib/reviews.js');

app.get('/', (req, res) => {
    res.json({ msg: 'Hello :)' });
});

// app.post('/v1/users', users.postUsers);
// app.get('/v1/users/:id', users.getUser);
// app.put('/v1/users/:id', users.putUser);
// app.delete('/v1/users/:id', users.deleteUser);

app.get('/v1/groups', groups.getGroups);
app.post('/v1/groups', groups.postGroups);
app.get('/v1/groups/:id', groups.getGroup);
// app.put('/v1/groups/:id', groups.putGroup);
// app.delete('/v1/groups/:id', groups.deleteGroup);

// app.get('/v1/tasks', tasks.getTasks);
// app.post('/v1/tasks', tasks.postTasks);
// app.get('/v1/tasks/:id', tasks.getTask);
// app.put('/v1/tasks/:id', tasks.putTask);
// app.delete('/v1/tasks/:id', tasks.deleteTask);

app.get('/v1/pools', pools.getPools);
app.post('/v1/pools', pools.postPools);
app.get('/v1/pools/:id', pools.getPool);
// app.put('/v1/pools/:id', pools.putPool);
// app.delete('/v1/pools/:id', pools.deletePool);

// app.get('/v1/exams', exams.getExams);
// app.post('/v1/exams', exams.postExams);
// app.get('/v1/exams/:id', exams.getExam);
// app.put('/v1/exams/:id', exams.putExam);
// app.delete('/v1/exams/:id', exams.deleteExam);

// app.get('/v1/papers', papers.getPapers);
// app.get('/v1/papers/:id', papers.getPaper);
// app.get('/v1/exams/:id/papers', papers.getExamPapers);

// app.get('/v1/submissions/:id', submissions.getSubmission);
// app.put('/v1/submissions/:id', submissions.putSubmission);
// app.delete('/v1/submissions/:id', submissions.deleteSubmission);
// app.get('/v1/papers/:id/submissions', submissions.getPaperSubmissions);
// app.post('/v1/papers/:id/submissions', submissions.postPaperSubmissions);
// app.get('/v1/tasks/:id/submissions', submissions.getTaskSubmissions);
// app.post('/v1/tasks/:id/submissions', submissions.postTaskSubmissions);

// app.get('/v1/reviews/:id', reviews.getReview);
// app.put('/v1/reviews/:id', reviews.putReview);
// app.delete('/v1/reviews/:id', reviews.deleteReview);
// app.get('/v1/submissions/:id/reviews', reviews.getSubmissionReviews);
// app.post('/v1/submissions/:id/reviews', reviews.postSubmissionReviews);

module.exports = app;
