let exporter=module.exports={};

exporter.User= class User {

    constructor (email, username){
        this.email=email;
        this.username=username;

        this.id=uniqueID();
        this.registrationTime=Date.now();
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getUsername(){
        return this.username;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getRegistrationTime(registrationTime){
        return registrationTime;
    }
    setEmail(email){
        this.email=email;
    }
    setUsername(username){
        this.username=username;
    }
    setFirstName(firstName){
        this.firstName=firstName;
    }
    setLastName(lastName){
        this.lastName=lastName;
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
