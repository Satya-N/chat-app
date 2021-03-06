const users = []

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    //Clean The Data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate The Data

    if (!username || !room) {
        return {
            error: 'Username And Room Are Required'
        }
    }

    // Check For Existing User
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //ValiDate UserName
    if (existingUser) {
        return {
            error: 'Username is in Use!'
        }
    }

    //Store User
    const user = { id, username, room }
    users.push(user)
    return { user }

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}


const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}




// addUser({
//     id: 21,
//     username: 'satya   ',
//     room: 'Haas'
// })
// addUser({
//     id: 31,
//     username: 'mike',
//     room: 'Haas'
// })
// addUser({
//     id: 41,
//     username: 'Solo',
//     room: 'Nooo'
// })


// // const user = getUser(31)
// // console.log(user)

// const userList = getUsersInRoom('Nooo')
// console.log(userList)