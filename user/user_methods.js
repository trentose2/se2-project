const user = require('./user_class.js')
const db = require('./simulated_db.js')
var exporter = module.exports = {};
// TODO: creator validation
exporter.doPost = function (email, username, firstName, lastName) {
    if(!(typeof email == 'string') || !(typeof username == 'string') || !(typeof firstName == 'string') || !(typeof lastName == 'string')){
        return null;
    }
    else{
        u = new user.User(email, username, firstName, lastName);
        db.insertUser(u);
        return u;
    }
};
// just a wrapper function around the getById in database
exporter.doGetById = function (id){
    data = db.getUserById(id);
    return data;
};
// just a wrapper function around the updateUser in database
exporter.doPut = function (id, email, username, firstName, lastName) {
    if(!(typeof email == 'string') || !(typeof username == 'string') || !(typeof firstName == 'string') || !(typeof lastName == 'string')){
        return null;
    }    
    else{
        let u = this.doGetById(id);
        if(u !== null){
            u.setEmail(email);
            u.setUsername(username);
            u.setFirstName(firstName);
            u.setLastName(lastName);

            let update = db.updateUser(u);
            return update;
        }
        return null;
    }
};
// just a wrapper function around the deleteUserById in database
exporter.doDeleteById = function (id) {
    data = db.deleteUserById(id);
    return data;
};
