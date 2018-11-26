//api layer
var exporter = module.exports ={}
const task = require('./task.js')
const methods = require('./task_methods.js')
exporter.getById= function(req, res){
    let id= req.params.id;

    var t;
    t= methods.doGetById(id);
    if(t===null){
        res.sendStatus(404);
        return;
    }
    else{
        res.status(200)
            .send(JSON.stringify(t))
    }
};

exporter.post = function (req, res){

    let title = req.body.title;
    let assignement = req.body.assignement;
    let type = req.body.type;

    if(!type || !title || !assignement){
        res.sendStatus(409);
        return
    }
    else{
        let t = methods.doPost(title,assignement,type);
        if(t === null){
            res.sendStatus(451);
            return;
        }
        res.status(201)
            .send(JSON.stringify(t));
    }
};
