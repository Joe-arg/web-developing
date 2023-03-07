const {createFile} = require("./Modules/Multiply");
const args = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        default: 1
    })
    .option("s", {
        alias: "show",
        type: "boolean",
        default: true
    }).argv;
const base = args.base;
const show = args.show;

createFile(base, show)
    .then(fileName => console.log("File", fileName, "created"))
    .catch(err => console.log(err));