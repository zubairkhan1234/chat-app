var express = require('express')

var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)


var PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))


app.get("/", (req, res, next)=>{
    console.log()
    // res.send("hello world")
    res.sendFile(__dirname + "/index.html")
})

//socket

io.on('connection', (socket)=>{
    console.log("connected.....")

    socket.on('message',(msg)=>{
        // console.log(msg)
        socket.broadcast.emit('message', msg)
    })
})











http.listen(PORT, ()=>{
    console.log(`server listing on port ${PORT}`)
})
