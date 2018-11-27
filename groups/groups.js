group_class = require("./group_class")

const doPost = function (req, res) {
    var group_id = generateId();

    var group_name = req.body.name;
    var group_description = req.body.description;
    var group_users = req.body.users;
    var group_creator = req.body.creator;
    var group_isPublic = req.body.public;
    
    var group_creationTime = Date.now();

    if (!(typeof group_name == 'string') || 
        !(typeof group_description == 'string') || 
        !(Number.isInteger(group_creator)) ||
        !(Array.isArray(group_users))){
        res.sendStatus(400);
    }
    
    var group = new group_class.Group(
                        group_id, 
                        group_name, 
                        group_description,
                        group_users, 
                        group_creator, 
                        group_isPublic, 
                        group_creationTime
                    );
    
    res.sendStatus(201);
}

// const doGet = function (req, res) {
    
// }

//TODO incremental id
const generateId = function () {
    return 1;
}

module.exports = {doPost};