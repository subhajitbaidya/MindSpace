import WebSocket, { WebSocketServer } from "ws";
import http from "http";

// Native way of creating HTTP server
const server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  response.end("hi there");
});

// Websocket instance
const wss = new WebSocketServer({ server });

// Socket connection
wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  //   Event registers
  //   Whenever there is an incoming message, we will breadcast the message to the connected clients

  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send("Hello from socket server", { binary: isBinary });
      }
    });
  });

  ws.send("Hello! Message From Server!!");
});

server.listen(8080, function () {
  console.log(new Date() + " Server is listening on port 8080");
});
