//api layer
var exporter = module.exports ={}
const user = require('./user_class.js')
const methods = require('./user_methods.js')

exporter.getById= function(req, res){
    let id= req.params.id;

    let u;
    u= methods.doGetById(id);
    if(u===null){
        res.sendStatus(404);
        return;
    }
    else{
        res.status(200).send(JSON.stringify(u));
    }
};

exporter.post = function (req, res){

    let email = req.body.email;
    let username = req.body.username;
    let firstName = req.body.firstName;
    let lastName= req.body.lastName;

    if(!email || !username || !firstName || !lastName){
        res.sendStatus(405);
        return
    }
    else{
        let u = methods.doPost(email,username);
        if(u === null){
            res.sendStatus(405);
            return;
        }
        res.status(201).send(JSON.stringify(u));
    }
};

exporter.put = function (req, res){
    if(u.costructor !==)
}

exporter.delete = function (req, res){
    let id = req.params.id;
    let u = methods.doGetById(id);
    if(methods.doDeleteById(id) && u !== null){
        res.status(200).json({User});
    } else {
        res.status(404);
    }
}