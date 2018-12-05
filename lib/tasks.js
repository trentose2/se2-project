const db =require('./db');
//packing/unpacking layer
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
    let email = req.query.email;
    let u = db.users.selectUserByEmail(email);
    let id;
    if(u===null){
        console.log('u null')
        id=-1
    }
    else{
        console.log('id='+u.id);
        id = u.id;
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
//exported methods
module.exports={
    getById,
    post,
    deleteTask,
    getByCreator,
    putTask
};

//working layer
methods ={
    doPost(title, assignement, type) {
        if(!(typeof title == 'string') || !(typeof assignement == 'string') || !(typeof type == 'string') ){

            return null;

        }
        else{
            let t = {
                id : undefined,
                title : title,
                type : type,
                assignement: assignement,
                creator: undefined,
                creationTime: new Date()
            }
            t=db.tasks.insertTask(t);
            return t;
        }
    },
    // just a wrapper function around the getById in database
    doGetById(id){

        data = db.tasks.getTaskById(id);
        return data;
    },
    // just a wrapper function around the deleteTask in database
    doDelete(id){
        return db.tasks.deleteTask(id);
    },
    //just wrapper around the getByCreator in database
    doGet(creator_id){
        if(isNaN(parseInt(creator_id,10))){
            return null;
        }
        else{
            return db.tasks.getTasksByCreator(creator_id);
        }
    },
    doPut(title, assignement, type, id){
        let t =  this.doGetById(id);
        if(t === null){
            return null;
        }
        else{
            if(typeof title =='string'){
                t.title=title;
            }
            if(typeof type =='string'){
                t.type=type;
            }
            if(typeof assignement =='string'){
                t.assignement=assignement;
            }
            let Task = db.tasks.updateTask(t);
            return Task;
        }


    }

}
