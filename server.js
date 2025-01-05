const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const { join } = require('path')

const app = express()
const server = createServer(app)
const io = new Server(server)
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

io.on('connection', (socket)=> {
  console.log(socket)
  console.log('A user has been connected')
})

server.listen(PORT, console.log(`Server running on Port ${PORT}`))