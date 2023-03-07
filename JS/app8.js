const getUserByID = (id, callback) => {
    const user = {
        id,
        name: 'Joel'
    }
    setTimeout(() => {
        callback(user)
    }, 1500)
}

getUserByID(10, (user) => console.log(user))