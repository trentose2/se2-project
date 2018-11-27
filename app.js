const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const groups = require('./groups/groups.js')
const task= require('./Tasks/tasks.js')

//health check
app.get('/', (req, res) => {
    res.json({msg: 'Hello :)' });
});
//groups
app.post('/v1/groups', groups.doPost);


//tasks
app.get('/v1/tasks/:id', (req, res) =>{
    task.getById(req, res)
} );
app.post('/v1/tasks', (req, res) =>{

task.post(req, res);
});

app.delete('/v1/tasks/:id', (req, res)=>{
    task.delete(req, res);
});

//keep at the end of the file
module.exports = app;
