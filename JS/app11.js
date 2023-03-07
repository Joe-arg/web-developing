const employees = [
    {id: 1, name: 'One'},
    {id: 2, name: 'Two'},
    {id: 3, name: 'Three'}
]

const salaries = [
    {id: 1, salary: 1000},
    {id: 2, salary: 1500}
]

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id)?.name
    if (employee)
        callback(false, employee)
    else
        callback(true, null)
}

const getSalary = (id, callback) => {
    const salary = salaries.find(e => e.id === id)?.salary
    if (salary)
        callback(false, salary)
    else
        callback(true, null)
}

const id = 2

getEmployee(id, (error, employee) => {
    if (error)
        return console.log(`The employee ${id} does not exist.`)
    getSalary(id, (error, salary) => {
        if (error)
            return console.log(`The employee ${id}'s name is ${employee} and has no registered salary.`)
    })
    console.log(`The employee ${id}'s name is ${employee} and has a salary of $${salary}.`)
})
