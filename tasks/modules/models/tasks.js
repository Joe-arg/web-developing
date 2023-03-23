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

    get showTasks() {
        const list = [];
        Object.keys(this.list).forEach(key => {
            const task = this.list[key];
            list.push(task);
        })
        return list;
    }
}

module.exports = Tasks;