const {pause, inquirerMenu, readDesc} = require('./modules/menus/menu_main');
const {saveData, readData} = require('./modules/menus/save_file');
const Tasks = require('./modules/models/tasks');
const tasks = new Tasks();

const main = async () => {
    console.clear();
    let opt
    tasks.start(readData());
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                let desc = await readDesc('Description: ');
                tasks.addTask(desc);
                console.log('Task Added');
                break;
            case '2':
                tasks.showTasks();
                break;
            case '3':
                tasks.showCompletedTasks();
                break;
            case '4':
                tasks.showPendingTasks();
                break;
            case '5':
                let ids = await tasks.menuComplete();

                break;
            case '6':
                let id = await tasks.menuDelete();
                if (id !== '0') {
                    const ok = await tasks.confirmDelete('Are you sure?');
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('Task Deleted');
                    }
                }
                break;
            case '0':
                saveData(tasks.listTasks());
        }
        if (opt !== '0')
            await pause();
    } while (opt !== '0');
};

main();
