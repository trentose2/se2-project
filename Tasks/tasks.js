//api layer
//useful variable to export functions
var exporter = module.exports ={}
//modules required
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
            res.sendStatus(500);
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
    if(Tasks === null || Tasks.length == 0){
        res.status(200)
            .json({"message": "no task found"})
    }
    else{
        res.status(200)
            .json({Tasks});
    }
}

exporter.putTask = function (req, res) {
    let id =req.params.id;
    let title = req.body.title;
    let assignement = req.body.assignement;
    let type = req.body.type;
    let Task;

    if(!type || !title || !assignement){
        res.sendStatus(400);
        return
    }
    if(id!==null && !isNaN(id)){
        Task = methods.doPut(title, assignement, type, id);
        if(Task === null){
            res.sendStatus(418);
            return;
        }
        else{
            res.status(200)
                .json({Task});

        }
    }
}
