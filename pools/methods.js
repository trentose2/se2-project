const pool = require('./entity.js');

let pools = new Array();

insert = function (newPool) {
    if (newPool instanceof pool.Pool) {
        id = pools.length
        newPool.id = id
        newPool.creationTime = Date.now();
        pools[id] = newPool
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
        for (let i = 0; i < pools.length; i++) {
            if (pools[i] && (pools[i].isPublic() || pools[i].getCreator() === creatorId)) {
                result.push(pools[i]);
            }
        }
        return result;
    }
}

module.exports = { insert, getByUserId };
