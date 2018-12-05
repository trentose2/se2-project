const db = {
    users: require('../persistence/users.json'),
    groups: require('../persistence/groups.json'),
    tasks: require('../persistence/tasks.json'),
    pools: require('../persistence/pools.json'),
    exams: require('../persistence/exams.json'),
    papers: require('../persistence/papers.json'),
    submissions: require('../persistence/submissions.json'),
    reviews: require('../persistence/reviews.json')
}

const users = {}

const groups = {
    insert(newGroup) {
        let group_ids = db.groups.map(group => group.id);

        let maxId = 0;
        if (group_ids.length) {
            maxId = Math.max(...group_ids);
        }

        newGroup.id = maxId + 1;
        db.groups.push(newGroup);
        return newGroup.id;
    },

    selectById(id) {
        let result = null;
        db.groups.forEach(group => {
            if (group.id == id) {
                result = group;
            }
        })
        return result;
    },

    selectAll() {
        return db.groups
    }
}

const tasks = {

    insertTask(t) {
        let task_ids = db.groups.map(task => task.id);

        let maxId = 0;
        if (tasj_ids.length) {
            maxId = Math.max(...task_ids);
        }
        t.id=maxId +1;
        db.tasks.push(t);
    },
    getAllTasks(){
        return db.tasks;
    },
    getTaskById(id){
        if(isNaN(parseInt(id,10))){
            return null;
        }
        else{
            data=db.tasks;
            for(i=0; i<data.length; i++ ){
                if(data[i].getId() == id){
                    return data[i];
                }
            }
            return null;
        }
    },
    deleteTask(id){
        if(isNaN(parseInt(id,10))){
            return false;
        }
        else{
            data=db.tasks;
            for(i=0; i<data.length; i++ ){
                if(data[i].getId() == id){
                    db=db.splice(i,1);
                    return true;
                }
            }
            return false;
        }
    },

    updateTask(t){

            let id = t.id;

            for(i=0; i<db.tasks.length; i++ ){
                if(db[i].getId() == id){
                    db.tasks[i].title(t.title);
                    db.tasks[i].assignement(t.assignement);
                    db.tasks[i].type(t.type);
                    return db.tasks[i];
                }
            }

            return null;

    },
    getTasksByCreator(creator_id){
        if(isNaN(parseInt(creator_id,10))){
            return null;
        }
        else{
            data=db.tasks;
            returned_tasks = new Array;
            for(i=0; i<data.length; i++ ){              //todo manage better undefined creator
                if(data[i].creator == creator_id || data[i].creator===undefined){
                    returned_tasks.push(data[i]);
                }
            }
            return returned_tasks;
        }
    }


}

const pools = {
    selectById(id) {
        let result = null;
        db.pools.forEach(pool => {
            if (pool.id == id) {
                result = pool;
            }
        })
        return result;
    },
    selectRandomTasks(poolId, n) {
        let pool = pools.selectById(poolId);
        let tasks = pool.tasks;
        result = [];
        if (n >= tasks.length) {
            return tasks;
        } else {
            for (let i = 0; i < n; i++) {
                result.push(tasks.splice(Math.floor(Math.random() * tasks.length), 1)[0]);
            }
        }
    }
};

const exams = {
    insert(newExam) {
        let exam_ids = db.exams.map(exam => exam.id)

        let maxId = 0
        if (exam_ids.length) {
            maxId = Math.max(...exam_ids)
        }

        newExam.id = maxId + 1
        db.exams.push(newExam)
        return newExam.id;
    }
}

const papers = {
    insert(newPaper) {
        let paper_ids = db.papers.map(papers => papers.id);

        let maxId = 0;
        if (paper_ids.length) {
            maxId = Math.max(...paper_ids);
        }

        newPaper.id = maxId + 1;
        db.papers.push(newPaper);
        return newPaper.id;
    },
    selectPapersByUserId(userId) {
        let result = new Array;
        if (userId.isNaN) {
            return null;
        } else {
            for (var i = 0; i < db.papers.length; i++) {
                if (db.papers[i].user == userId) {
                    result.push(papers[i])
                }
            }
            return result;
        }
    },
    selectById(id) {
        let result = null;
        db.papers.forEach(paper => {
            if (paper.id == id) {
                result = paper;
            }
        })
        return result;
    }
}

const submissions = {}

const reviews = {}

module.exports = {
    users,
    groups,
    tasks,
    pools,
    exams,
    papers,
    submissions,
    reviews
}