const employees = [
    {id: 1, name: 'One'},
    {id: 2, name: 'Two'},
    {id: 3, name: 'Three'}
]

const salary = [
    {id: 1, salary: 1000},
    {id: 2, salary: 1500}
]

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id)
    if (employee)
        callback(false, employee)
    else
        callback(true, `The employee ${id} does not exist.`)
}

const getSalary = (id, callback) => {
    const employee = salary.find(e => e.id === id)
    if (employee)
        callback(false, employee)
    else
        callback(true, `The employee ${id} does not have a registered salary.`)
}

const id = 4

getEmployee(id, (error, employee) => {
    if (error) {
        console.log('Error')
        return console.log(employee)
    } else {
        console.log(employee)
        getSalary(id, (error, employee) => {
            if (error) {
                console.log('Error')
                return console.log(employee)
            }
            console.log(employee)
        })
    }
})
