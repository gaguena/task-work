const db = require("../db/database");
const BasicException = require("../exception/basic-exception");
const NotFoundException = require("../exception/notFound-exception");

const Task = db.model('task', {title: String, description: String, status: Boolean});

module.exports = class TaskModel {

    save (task) {
        new Task(task).save(function (err) {
            if (err) throw err;
            console.log('Dados salvos com sucesso!');
      });
      return;
    }

    findById(id) {
        return Task.findById(id, (error, result) => {
            if(error)
                throw new NotFoundException("Not found task by id");
        });
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

    delete(id) {
        try {
            this.findById(id).then((task) => {
                Task.findOneAndRemove({"_id": task._id }).then(function () {
                    console.log("Data deleted"); // Success 
                }).catch(function (error) {
                    console.log(error); // Failure
                    throw new BasicException("Not found task by id");
                });
            });
            
        } catch (ex) {
            throw ex;
        }
        return;
    }
}