// just an array
var exporter = module.exports = {};
const user = require('./user_class.js');
let db = new Array;

exporter.insertUser = function (u) {
    if(u instanceof user.User){
        db.push(u);
        return true;
    }
    else{
        return false;
    }
}
exporter.getUserById = function (id){
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
exporter.updateUser = function (u){
    if(u.constructor !== user.User){
        return null;
    }
    else{
        if(this.deleteUserById(u.getId())){
            db.push(u);
            return u;
        }
        return null;
    }
}
exporter.deleteUserById = function (id){
    if(id.isNaN){
        return false;
    }
    else{
        data=db;
        for(i=0; i<data.length; i++ ){
            if(data[i].getId() == id){
                db=db.splice(i,1);
                return true;
            }
        }
        return false;
    }
}
exporter.getAllUsers = function (){
    return db;
}