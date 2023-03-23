const fs = require('fs');
const file = './modules/data/data.json'

const saveData = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

module.exports = {
    saveData
};