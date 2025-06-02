const connect = new WebSocket("ws://echo.websocket.events");

connect.onopen = () => {
   connect.send("hello, I am learning websockets");
};

connect.onmessage = (event) => {
   console.log("message:", event.data)
}