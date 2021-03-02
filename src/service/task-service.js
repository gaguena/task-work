const TaskModel = require("../model/task-model");

module.exports = class TaskService {
    constructor() {

    }

    save(task) {
        new TaskModel(task).save();
    }

    findAll() {
       return new TaskModel().findAll();
    }
}