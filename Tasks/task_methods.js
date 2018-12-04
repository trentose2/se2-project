const task = require('./task_class.js')
const db = require('./simulated_db.js')
//useful variable to export functions
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
//just wrapper around the getByCreator in database
exporter.doGet = function (creator_id){
    if(isNaN(creator_id)){
        return null;
    }
    else{
        return db.getTasksByCreator(creator_id);
    }
}

exporter.doPut = function (title, assignement, type, id){
    let t =  this.doGetById(id);
    if(t === null){
        return null;
    }
    else{
        if(typeof title =='string'){
            t.setTitle(title);
        }
        if(typeof type =='string'){
            t.setType(type);
        }
        if(typeof assignement =='string'){
            t.setAssignement(assignement);
        }
        let Task = db.updateTask(t);
        return Task;
    }


};
