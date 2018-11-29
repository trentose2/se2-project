const group = require('./entity.js');

let groups = new Array();

insert = function (newGroup) {
    if (newGroup instanceof group.Group) {
        id = groups.length
        newGroup.id = id
        newGroup.creationTime = Date.now();
        groups[id] = newGroup
        return true;
    } else {
        return false;
    }
}

getByUserId = function (creatorId) {
    if (isNaN(creatorId)) {
        return null;
    } else {
        let result = []
        for (let i = 0; i < groups.length; i++) {
            if (groups[i] && (groups[i].isPublic() || groups[i].getCreator() === creatorId)) {
                result.push(groups[i]);
            }
        }
        return result;
    }
}

module.exports = { insert, getByUserId };
