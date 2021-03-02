const taskRouter = require("./task-controller");

module.exports = class RouterFactroy {
    
    create(app) {
        app.use("/tasks", taskRouter);
    }
}