var socket = io()
var textarea = document.querySelector('#textarea')
var messageArea = document.querySelector('.message_area')
let name ;
do{
    name  = prompt("Enter your name")
}while(!name)

textarea.addEventListener('keyup', (e)=>{
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    var msg = {
        user: name,
        message: message,
    }

    appendMessage(msg, 'outgoing')

    socket.emit('message', msg)
}

function appendMessage(msg, type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')

    var markUp = `<h4>${msg.user}</h4> <p>${msg.message}</p>`
    mainDiv.innerHTML = markUp
    messageArea.appendChild(mainDiv)
}


///recieved message 
socket.on('message', (msg)=>{
    // console.log(msg)
    appendMessage(msg, 'incoming')
})

