//api layer
var exporter = module.exports ={}
const task = require('./task.js')
const methods = require('./task_methods.js')
exporter.getById= function(req, res){
    let id= req.params.id;


    let Task= methods.doGetById(id);
    if(Task===null){
        res.sendStatus(404);
        return;
    }
    else{
        res.status(200)
            .json({Task});
    }
};

exporter.post = function (req, res){

    let title = req.body.title;
    let assignement = req.body.assignement;
    let type = req.body.type;

    if(!type || !title || !assignement){
        res.sendStatus(400);
        return
    }
    else{
        let Task = methods.doPost(title,assignement,type);
        if(Task === null){
            res.sendStatus(400);
            return;
        }
        res.status(201)
            .json({Task});
    }
};
