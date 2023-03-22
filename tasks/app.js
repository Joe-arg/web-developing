const {showMenu, pause, inquirerMenu, readDesc} = require('./modules/menus/menu_main');
const Tasks = require('./modules/models/tasks');
const tasks = new Tasks();

const main = async () => {
    console.clear();
    let opt
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                let desc = await readDesc('Description: ');
                tasks.addTask(desc);
                console.log('Task Added');
                break;
            case '2':
                console.log(tasks.list);
                break;
        }
        if (opt !== '0')
            await pause();
    } while (opt !== '0');
};

main();