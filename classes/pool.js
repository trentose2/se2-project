exports = module.exports = {};

exports.Pool = class Pool {
    constructor(id, name, description, tasks, creator, public_, creationTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tasks = tasks;
        this.creator = creator;
        this.public = public_;
        this.creationTime = creationTime;
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

    getTasks() {
        return this.tasks;
    }

    getCreator() {
        return this.creator;
    }

    isPublic() {
        return this.public;
    }

    getCreationTIme() {
        return this.creationTime;
    }
};
