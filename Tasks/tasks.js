//api layer
var exporter = module.exports ={}
const task = require('./task_class.js')
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
exporter.delete = function (req, res){
    let id = req.params.id;
    let Task= methods.doGetById(id);
    if(methods.doDelete(id) && Task!==null){
        res.status(200)
            .json({Task});
    }
    else{
        res.sendStatus(404);
    }
};
exporter.getByCreator = function (req, res){
    let id = req.params.id; //todo modify this for auth
    if(id === undefined || id === null){
        id=-1;
    }
    let Tasks = methods.doGet(id);
    if(Tasks === null){
        res.status(200)
            .json('{"message": "no task found"}')
    }
    else{
        res.status(200)
            .json(Tasks);
    }
}
