const db = require("../db/database")

const Task = db.model('task', {title: String, description: String, status: Boolean});

module.exports = class TaskModel {

    save (task) {
        new Task(task).save(function (err) {
            if (err) throw err;
            console.log('Dados salvos com sucesso!');
      });
      return;
    }

    findAll(callBack) {
        return new Promise((resolve, reject) => {
            Task.find({}, function(err, result) {
            if(!err) {
                return resolve(result);
            }
            return reject("erro ao consultar");
            });
        });
    }
}