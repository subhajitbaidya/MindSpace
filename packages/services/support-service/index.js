import WebSocket, { WebSocketServer } from "ws";
import http from "http";
import generateResponse from "./model.js";

// Native way of creating HTTP server
const server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  response.end("hi there");
});

// Users simulation
let connectedClients = [];

// Websocket instance
const wss = new WebSocketServer({ server });

// Socket connection
wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  // Storing users simulation
  connectedClients.push({ ws: ws, room: "room1" });

  //   Event registers
  ws.on("message", async function message(data, isBinary) {
    connectedClients.forEach((client) => {
      if (client.room == "room1") client.ws.send("Broadcasting......");
    });
    console.log(connectedClients);
    const text = data.toString();
    const response = await generateResponse(text);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(response, { binary: isBinary });
      }
    });
  });

  ws.send("Hello! Message From Server!!");
});

server.listen(8080, function () {
  console.log(new Date() + " Server is listening on port 8080");
});
