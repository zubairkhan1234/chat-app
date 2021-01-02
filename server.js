var express = require("express")
var cors = require("cors")
var path = require("path")
var morgan = require("morgan")
var bodyParser = require("body-parser")
var socketIo = require("socket.io")
var http = require("http")


var app = express()
var PORT = process.env.PORT || 5000

var server = http.createServer(app)
var io = socketIo(server)



app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/', express.static(path.resolve(path.join(__dirname, 'public'))))


io.on("connect", (user)=>{
    console.log("user connected")
})




server.listen(3000, ()=>{
    console.log("surver is running")
})