require("colors");
const fs = require("fs");

const createFile = async (base = 1, show = false) => {
    let result = "";

    result += `Table ${base}`.rainbow;
    for (let i = 1; i <= 10; i++) {
        // result += `\n${base} x ${i} = ${base * i}`;
        result += `\n${base}`.red;
        result += " x ".yellow;
        result += `${i}`.green;
        result += " = ".blue;
        result += `${base * i}`.magenta;
    }
    if (show) {
        console.log(result);
    }
    try {
        fs.writeFileSync(`Table ${base}`, result);
    } catch (err) {
        return err;
    }
    return `Table ${base}`.rainbow;
}

module.exports = {
    createFile
}