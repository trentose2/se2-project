
Group = class Group {
    constructor (id, name, description, users, creator, isPublic, creationTime){
        this.id=id;
        this.name=name;
        this.description=description;
        this.users=users;
        this.creator=creator;
        this.isPublic=isPublic;        
        this.creationTime=creationTime;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    getUsers(){
        return this.users;
    }
    getCreator(){
        return this.creator;
    }
    getIsPublic(){
        return this.isPublic;
    }
    getCreationTIme(){
        return this.creationTime;
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

 module.exports={Group};
