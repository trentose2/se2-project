Exam = class Exam {
    constructor (name, pool, group, creator) {
        this.name = name;
        this.pool = pool;
        this.group = group;
        this.creator = creator;

        this.id = uniqueID();
        this.creationTime = Date.now();
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getPool() {
        return this.pool;
    }

    getGroup() {
        return this.group;
    }

    getTasksPerPaper() {
        return this.taskPerPaper;
    }

    getStartTime() {
        return this.startTime;
    }

    getDeadline() {
        return this.deadline;
    }

    getCreator() {
        return this.creator;
    }

    getCreationTime() {
        return this.creationTime;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setPool(pool) {
        this.pool = pool;
    }

    setGroup(group) {
        this.group = group;
    }

    setTasksPerPaper(taskPerPaper) {
        this.taskPerPaper = taskPerPaper;
    }

    setStartTime(startTime) {
        this.startTime = startTime;
    }

    setDeadline(deadline) {
        this.deadline = deadline;
    }
};

// copied from http://chamnapchhorn.blogspot.com/2008/07/trick-to-use-static-variables-in.html
var uniqueID = (function() {
    var id = 0; // This is the private persistent value
    // The outer function returns a nested function that has access
    // to the persistent value.  It is this nested function we're storing
    // in the variable uniqueID above.
    return function() { return id++; };  // Return and increment
})(); // Invoke the outer function after defining it.

module.exports = {Exam};