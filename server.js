const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const { join } = require('path')

const app = express()
const server = createServer(app)
const io = new Server(server)
const PORT = process.env.PORT || 3000

app.use(express.static(join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

io.on('connection', (socket)=> {
  console.log('A user has been connected')
  socket.emit('messageFromServer', 'Hello User - This is the Server')
  socket.on('messageFromClient', (message) => {
    console.log('Received message from Client')
  })
})

server.listen(PORT, console.log(`Server running on Port ${PORT}`))