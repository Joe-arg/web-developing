require('colors');
const inquirer = require('inquirer');

const inquirerMenu = async () => {
    const questions = [
        {
            type: 'list',
            name: 'option',
            message: 'Choose an option',
            choices: [
                {value: '1', name: 'Create task'},
                {value: '2', name: 'Show task'},
                {value: '3', name: 'Show completed task'},
                {value: '4', name: 'Show pending task'},
                {value: '5', name: 'Complete task'},
                {value: '6', name: 'Delete task'},
                {value: '0', name: 'Exit'}
            ]
        }
    ];
    console.clear();
    const opt = await inquirer.prompt(questions);
    return opt.option;
}
const showMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('========================================='.green);
        console.log('            Choose an option'.green);
        console.log('========================================='.green);
        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} Show tasks`);
        console.log(`${'3.'.green} Show completed tasks`);
        console.log(`${'4.'.green} Show pending tasks`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Exit`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question('Option: ', (opt) => {
            readLine.close();
            resolve(opt);
        });
    })
};

const pause = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question('Press enter to continue ', () => {
            readLine.close();
            resolve();
        });
    })

}

const readDesc = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate(value) {
                if (value.length === 0)
                    return 'Insert a description, please.'
                return true;
            }
        }
    ];
    console.clear();
    return await inquirer.prompt(question);
}

module.exports = {
    pause,
    inquirerMenu,
    readDesc
};