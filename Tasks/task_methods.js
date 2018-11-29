const task = require('./task_class.js')
const db = require('./simulated_db.js')
var exporter = module.exports = {};
// TODO: creator validation
exporter.doPost = function (title, assignement, type) {
    if(!(typeof title == 'string') || !(typeof assignement == 'string') || !(typeof type == 'string') ){

        return null;

    }
    else{
        t = new task.Task(title, assignement, type);
        db.insertTask(t);
        return t;
    }
};
// just a wrapper function around the getById in database
exporter.doGetById = function (id){
    data = db.getTaskById(id);
    return data;
}
// just a wrapper function around the deleteTask in database
exporter.doDelete = function (id){
    return db.deleteTask(id);
}