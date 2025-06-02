const socket = new WebSocket("ws://echo.websocket.events");

socket.onpen = () => {
    console.log("Websocket is connected");
};

// When a message is received from the server
socket.onmessage = (event) => {
    const ul = document.getElementById("messages");
    const li = document.createElement("li");
    li.textContent = "📩 Recieved: " + event.data;
    ul.appendChild(li);
};

// Send a message when button is clicked

function sendMessage() {
    const input = document.getElementById("input");
    const message = input.value;
    socket.send(message);
    input.value = "";

    const ul = document.getElementById("messages");
    const li = document.createElement("li");
    li.textContent = " sent: " + message;
    ul.appendChild(li);
}