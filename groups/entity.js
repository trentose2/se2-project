Group = class Group {
    constructor(id, name, description, users, creator, public_, creationTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.users = users;
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
    getUsers() {
        return this.users;
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

module.exports = { Group };
