const TaskModel = require("../model/task-model");

module.exports = class TaskService {
    constructor() {

    }

    save(task) {
        console.log('Salvando task: ' + task);
        new TaskModel().save(task);
    }

    findOne(id) {
        return new TaskModel().findById(id);
    }

    findAll() {
       return new TaskModel().findAll();
    }

    delete(id) {
        new TaskModel().delete(id);
    }
}