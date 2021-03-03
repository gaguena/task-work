const express = require('express');
const TaskService = require("../service/task-service");

const taskRouter = express.Router();

const TaskController  = {

    taskOne:(req, resp) => {
        console.log('Recebendo o parametro: ' + req.params.code);
        resp.redirect('/tasks')
    },
    tasksAll: (req, resp) => {
        new TaskService().findAll().then((datas) => {
            console.log("Resultado:" + datas);
            resp.render('task/tasks-page', {tasks: datas});
        }).catch((error) => {
            console.log('Erro: ' + error);
            resp.render('task/tasks-page', {tasks: {}});
        });
    },
    save: (req, resp) => {
        console.log('controller: ' + req.body);
        new TaskService().save(req.body);
        resp.redirect('/tasks')
    }
}


taskRouter.get("/", TaskController.tasksAll);
taskRouter.get("/:code/", TaskController.taskOne);
taskRouter.post("/", TaskController.save);

module.exports = taskRouter;