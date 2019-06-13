const path = require('path')
const express= require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname , "../public")

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('newUser', 'welcome')

    socket.on('newMessage' , (message) => {
        io.emit('receiveMessage' , message)
    })

})

server.listen(port, () => {
    console.log('server is up on port ' + port)
})
