// just an array
var exporter = module.exports = {};
const task = require('./task.js');
let db = new Array;
exporter.insert = function (t) {
    if(t instanceof task.Task){
        db.push(t);
        return true;
    }
    else{
        return false;
    }
}
exporter.getAll = function (){
    return db;
}
exporter.getById = function (id){
    if(id.isNaN){
        return null;
    }
    else{
        data=db;
        for(i=0; i<data.length; i++ ){
            if(data[i].getId() == id){
                return data[i];
            }
        }
        return null;
    }
}
