const employees = [
    {id: 1, name: 'One'},
    {id: 2, name: 'Two'},
    {id: 3, name: 'Three'}
]

const salaries = [
    {id: 1, salary: 1000},
    {id: 2, salary: 1500}
]

const getEmployee = (id) => {
    const employee = employees.find(e => e.id === id)?.name
    return new Promise((resolve, reject) => {
        employee ? resolve(employee) : reject(`The employee ${id} does not exist.`)
    })
}

const getSalary = (id) => {
    const salary = salaries.find(e => e.id === id)?.salary
    return new Promise((resolve, reject) => {
        salary ? resolve(salary) : reject(`The employee ${id} has no registered salary.`)
    })
}

const id = 4

getEmployee(id)
    .then(employee => console.log(employee))
    .catch(error => console.log(error))

getSalary(id)
    .then(salary => console.log(salary))
    .catch(error => console.log(error))