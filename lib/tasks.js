//api layer
//useful variable to export functions
const getById= function(req, res){
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

const post = function (req, res){

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

const deleteTask = function (req, res){
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


const getByCreator = function (req, res){
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

const putTask = function (req, res) {
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
            res.sendStatus(404);
            return;
        }
        else{
            res.status(200)
                .json({Task});

        }
    }
}
module.exports={
    getById,
    post,
    deleteTask,
    getByCreator,
    putTask
};


methods ={
    doPost(title, assignement, type) {
        if(!(typeof title == 'string') || !(typeof assignement == 'string') || !(typeof type == 'string') ){

            return null;

        }
        else{
            t = new task.Task(title, assignement, type);
            db.insertTask(t);
            return t;
        }
    },
    // just a wrapper function around the getById in database
    doGetById(id){
        data = db.getTaskById(id);
        return data;
    },
    // just a wrapper function around the deleteTask in database
    doDelete(id){
        return db.deleteTask(id);
    },
    //just wrapper around the getByCreator in database
    doGet(creator_id){
        if(isNaN(creator_id)){
            return null;
        }
        else{
            return db.getTasksByCreator(creator_id);
        }
    },
    doPut(title, assignement, type, id){
        let t =  this.doGetById(id);
        if(t === null){
            return null;
        }
        else{
            if(typeof title =='string'){
                t.setTitle(title);
            }
            if(typeof type =='string'){
                t.setType(type);
            }
            if(typeof assignement =='string'){
                t.setAssignement(assignement);
            }
            let Task = db.updateTask(t);
            return Task;
        }


    }

}
task={
    Task= class Task {

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
        setTitle(title){
            if(typeof(title)==='string'){
                this.title=title;
            }
        }
        setAssignement(assignement){
            if(typeof(assignement)==='string'){
                this.assignement=assignement;
            }
        }
        setType(type){
            if(typeof(type)==='string'){
                this.type=type;
            }
        }
        setCreator(creator){
            if(!isNaN(creator)){
                this.creator=creator;
            }
        }

    }
}
