const Task = require('./task')

class Tasks {
    list = {}

    constructor() {
        this.list = {};
    }

    addTask(desc = '') {
        const task = new Task(desc);
        this.list[task.id] = task;
    }
}

module.exports = Tasks;