
const group = require('./group_class.js');

let db = new Array();

const insertGroup = (e) => {
    if (e instanceof group.Group) {
        db.push(e);
        return true;
    } else {
        return false;
    }
};

const getAllGroups = () => {
    //TODO creator check, waiting for cookies system
    if (db.length == 0) {
        return 'No groups found';
    } else {
        return db;
    }
};

const getGroupById = (id) => {
    if (isNaN(id)) {
        return null;
    } else {
        for (let i = 0; i < db.length; i++) {
            if (db[i].getId() === id) {
                return db[i];
            }
        }
        return null;
    }
};

module.exports = {
    insertGroup,
    getAllGroups,
    getGroupById
};