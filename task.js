let exporter=module.exports={};

exporter.Task= class Task {

    constructor (title, assignement, type){
        this.title=title;
        this.assignement=assignement;
        this.type=type;

        this.id=uniqueID();
        this.creationTime=Date.now();
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getAssignement(){
        return this.assignement;
    }
    getType(){
        return this.type;
    }
    getCreator(){
        return this.creator;
    }
    setCreator(creator){
        this.creator=creator;
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
