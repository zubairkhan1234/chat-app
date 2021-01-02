var url = "http://localhost:3000"


var socket = io(url)

socket.on("connection", function(){
    console.log("connected")
})



