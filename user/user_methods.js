const user = require('./user_class.js')
const db = require('./simulated_db.js')
var exporter = module.exports = {};
// TODO: creator validation
exporter.doPost = function (email, username) {
    if(!(typeof email == 'string') || !(typeof username == 'string')){
        return null;
    }
    else{
        u = new user.User(email, username);
        db.insertUser(u);
        return u;
    }
};
// just a wrapper function around the getById in database
exporter.doGetById = function (id){
    data = db.getUserById(id);
    return data;
}
// just a wrapper function around the ??? in database
//exporter.doPutById = function (id) {
//    data = db.updateUser(u);
//    return data;
//}
// just a wrapper function around the deleteUserById in database
exporter.doDeleteById = function (id) {
    data = db.deleteUserById(id);
    return data;
}
