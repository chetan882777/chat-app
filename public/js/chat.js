const socket = io() 

socket.on('newUser', (message) =>{
    console.log(message)
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = document.querySelector('#messageInput').value
    socket.emit('newMessage' , message)
})

socket.on('receiveMessage', (message) => {
    console.log(message)
})
