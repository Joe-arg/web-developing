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

    start(tasks = []) {
        tasks.forEach(task => {
            this.list[task.id] = task;
        });
    }

    listTasks() {
        const list = [];
        Object.keys(this.list).forEach(key => {
            const task = this.list[key];
            list.push(task);
        })
        return list;
    }

    showTasks() {
        this.listTasks().forEach((task, i) => {
            const index = `${i + 1}`.green;
            const {desc, comp} = task;
            const status = comp ? 'Completed'.green : 'Uncompleted'.red;
            console.log(`${index} ${desc} :: ${status}`);
        });
    }
}

module.exports = Tasks;