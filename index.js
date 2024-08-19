const { Socket } = require('dgram')
const express= require('express')
const app= express()
const http= require ('http')
const path= require('path')
const Server= require('socket.io')
const server= http.createServer(app);

const io= Server(server);

// sokect <==> client
io.on('connection', (socket)=>{
    // console.log(`A new user has connected`, socket.id)
    socket.on('user-message', message=>
    // console.log(message));
    io.emit('Message-from-server', message))
})

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res)=>{
    return res.sendFile(path.join(__dirname,"public", "index.html"));
})
console.log(path.join(__dirname, "public"));

server.listen(9001,()=>console.log(`Server is listening on port 9001`));