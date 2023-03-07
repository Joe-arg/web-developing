const employees = [
    {id: 1, name: 'One'},
    {id: 2, name: 'Two'},
    {id: 3, name: 'Three'}
]

const getEmployee = (id) => {
    const employee = employees.find(e => e.id === id)
    if (employee)
        return employee
    else
        return `The employee ${id} does not exist.`
}

console.log(getEmployee(3))
console.log(getEmployee(22))