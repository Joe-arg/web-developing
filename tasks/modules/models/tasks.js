require('colors');
const inquirer = require('inquirer');
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

    deleteTask(id = '') {
        if (this.list[id])
            delete this.list[id];
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
            const {desc, completed_in} = task;
            const status = completed_in ? 'Completed'.green : 'Uncompleted'.red;
            console.log(`${index} ${desc} :: ${status}`);
        });
    }

    showCompletedTasks() {
        this.listTasks().forEach((task, i) => {
            const index = `${i + 1}`.green;
            const {desc, completed_in} = task;
            const status = completed_in ? 'Completed'.green : 'Uncompleted'.red;
            if (completed_in)
                console.log(`${index} ${desc} :: ${status}`);
        });
    }

    showPendingTasks() {
        this.listTasks().forEach((task, i) => {
            const index = `${i + 1}`.green;
            const {desc, completed_in} = task;
            const status = completed_in ? 'Completed'.green : 'Uncompleted'.red;
            if (!completed_in)
                console.log(`${index} ${desc} :: ${status}`);
        });
    }

    menuDelete = async () => {
        const tasks = this.listTasks();
        const choices = tasks.map((task, i) => {
            const index = `${i + 1}`.green;
            return {
                value: task.id,
                name: `${index} ${task.desc}`
            }
        });
        choices.unshift({
            value: '0',
            name: '0.'.green + 'Cancel'
        });
        const questions = [
            {
                type: 'list',
                name: 'id',
                message: 'Delete',
                choices
            }
        ]
        const {id} = await inquirer.prompt(questions);
        return id;
    }

}

module.exports = Tasks;