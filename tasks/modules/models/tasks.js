require('colors');
const inquirer = require('inquirer');
const Task = require('./task')
const {prompt} = require("inquirer");

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
            const status = completed_in ? `${completed_in}`.green : 'Uncompleted'.red;
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
            name: '0 '.green + 'Cancel'
        });
        const question = [
            {
                type: 'list',
                name: 'id',
                message: 'Delete',
                choices
            }
        ];
        const {id} = await inquirer.prompt(question);
        return id;
    }

    confirmDelete = async (message) => {
        const question = [
            {
                type: 'confirm',
                name: 'ok',
                message
            }
        ];
        const {ok} = await inquirer.prompt(question);
        return ok;
    }

    menuComplete = async () => {
        const tasks = this.listTasks();
        const choices = tasks.map((task, i) => {
            const index = `${i + 1}`.green;
            return {
                value: task.id,
                name: `${index} ${task.desc}`,
                checked: !!task.completed_in
            }
        });
        const question = [
            {
                type: 'checkbox',
                name: 'ids',
                message: 'Select tasks',
                choices
            }
        ];
        const {ids} = await inquirer.prompt(question);
        this.listTasks().forEach(task => {
            if (ids.includes(task.id))
                this.list[task.id].completed_in = new Date().toISOString();
            else
                this.list[task.id].completed_in = null;
        });
        return ids;
    }

}

module.exports = Tasks;