const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501" ]
  }
})

io.on('connection', (socket) => {
  console.log('user connected')
  socket.broadcast.emit("new user notification", "hm")
  socket.on('chat message', (msg) => {
    io.emit('chat message', socket.id+": "+msg)
  });
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

httpServer.listen(9000, function(){
  console.log('listening on port 9000')
});