const db = {
    users: require('../persistence/users.json'),
    groups: require('../persistence/groups.json'),
    tasks: require('../persistence/tasks.json'),
    pools: require('../persistence/pools.json'),
    exams: require('../persistence/exams.json'),
    papers: require('../persistence/papers.json'),
    submissions: require('../persistence/submissions.json'),
    reviews: require('../persistence/reviews.json')
};

const users = {};

const groups = {
    insert(newGroup) {
        let group_ids = db.groups.map(group => group.id);

        let maxId = 0;
        if (group_ids.length) {
            maxId = Math.max(...group_ids);
        }

        newGroup.id = maxId + 1;
        db.groups.push(newGroup);
    },

    selectById(id) {
        let result = null;
        db.groups.forEach(group => {
            if (group.id == id) {
                result = group;
            }
        });
        return result;
    },

    selectAll() {
        return db.groups;
    }
};

const tasks = {};

const pools = {
    insert(newPool) {
        let pool_ids = db.pools.map(pool => pool.id);

        let maxId = 0;
        if (pool_ids.length) {
            maxId = Math.max(...pool_ids);
        }

        newPool.id = maxId + 1;
        db.pools.push(newPool);
    },

    selectById(id) {
        let result = null;
        db.pools.forEach(pool => {
            if (pool.id == id) {
                result = pool;
            }
        });
        return result;
    },

    selectByUserId(userId) {
        let result = [];
        db.pools.forEach(pool => {
            if ((pool.creator == userId) || pool.public) {
                result.push(pool);
            }
        });
        return result;
    }
};

const exams = {};

const papers = {};

const submissions = {};

const reviews = {};

module.exports = {
    users,
    groups,
    tasks,
    pools,
    exams,
    papers,
    submissions,
    reviews
};
