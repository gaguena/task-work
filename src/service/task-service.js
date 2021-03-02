const TaskModel = require("../model/task-model");

module.exports = class TaskService {
    constructor() {

    }

    save(task) {
        console.log('Salvando task: ' + task);
        new TaskModel().save(task);
    }

    findAll() {
       return new TaskModel().findAll();
    }
}