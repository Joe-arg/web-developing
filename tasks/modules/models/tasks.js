const Task = require('./task')

class Tasks {
    _list = {}

    constructor() {
        this._list = {};
    }

    addTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    get showTasks() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        })
        return list;
    }
}

module.exports = Tasks;