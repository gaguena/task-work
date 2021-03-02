const express = require('express');
const TaskService = require("../service/task-service");

const taskRouter = express.Router();

const TaskController  = {

    task: (req, resp) => {
        new TaskService().findAll().then((datas) => {
            console.log("Resultado:" + datas);
            resp.render('task/task-page', {tasks: datas});
        }).catch((error) => {
            console.log('Erro: ' + error);
            resp.render('task/task-page');
        });
    },
    save: (req, resp) => {
        console.log('controller: ' + req.body);
        new TaskService().save(req.body);
        resp.redirect('/tasks')
    }
}


taskRouter.get("/", TaskController.task);
taskRouter.post("/", TaskController.save);

module.exports = taskRouter;