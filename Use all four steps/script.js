const four = new WebSocket("wss://echo.websocket.events");

four.onopen = () => {
    addMessage(" connected to server (OPENED)");
};

four.onmessage = (event) => {
    addMessage(" server: " + event.data);
};

function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value;
    if (four.readyState === WebSocket.OPEN) {
        four.send(text);
        addMessage(" you: " + text);
        input.value = "";
    } else {
        addMessage(" Connection not open.");
    }
};


function closeConnection() {
    four.close();
    addMessage( "Connection Closed");
};

four.onclose = () => {
    addMessage(" Websocket connection closed");
};

function addMessage(text) {
    const msg = document.createElement("P");
        msg.textContent = text;
        document.getElementById("messages").appendChild(msg);
};
