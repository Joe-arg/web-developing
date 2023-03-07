const person = {
    name: "Marcos",
    last: "Morales",
    nick: "Arqui",
    age: 50,
    getName: function () {
        return `${this.name} ${this.last} ${this.nick}`;
    }
}

console.log(person.getName())

function printPerson(person) {
    const {name, last, nick, age = 0} = person
    console.log(name, last, nick, age)
}

printPerson(person)

const people = ["Jose", "Luis", "Pedro", "Marcos", "María", "Elena"]
const [p1, p2, p3, p4, p5, p6] = people
console.log(p1, p2, p3, p4, p5, p6)