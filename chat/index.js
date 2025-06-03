const socket = new WebSocket("wss://echo.websocket.events");

const messagesDiv = document.getElementById("messages");

socket.onopen = () => {
  addMessage("✅ Connected to server");
};

socket.onmessage = (event) => {
  addMessage("🟢 Server: " + event.data);
};

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value;
  socket.send(text);
  addMessage("🔵 You: " + text);
  input.value = ""; }

function addMessage(text) {
  const p = document.createElement("p");
  p.textContent = text;
  messagesDiv.appendChild(p);
}
