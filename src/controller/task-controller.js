const express = require('express');
const TaskService = require("../service/task-service");

const taskRouter = express.Router();

const TaskController  = {

    taskOne:(req, resp) => {
        console.log('Recebendo o parametro: ' + req.params.code);
        new TaskService().findOne(req.params.code)
        .then((data) => {
            console.log(("Sucesso: " + data))
            resp.render('task/task-detalhe-page', {task: data});
        }).catch((error) => {
            console.log('Erro >>>>: ' + error);
            resp.redirect('/tasks');
        });
        
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
    },
    delete: (req, res) => {
        try {
            var id = req.params.code;
            console.log('delete item: ' + id);
            new TaskService().delete(id);
            res.sendStatus(204);
        } catch(ex) {
            res.sendStatus(400);
        }
    }
}


taskRouter.get("/", TaskController.tasksAll);
taskRouter.get("/:code/", TaskController.taskOne);
taskRouter.delete("/:code", TaskController.delete);
taskRouter.post("/", TaskController.save);

module.exports = taskRouter;