const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

let sharedText = "";

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Send current text to new user
  socket.emit("load-text", sharedText);

  // Listen for changes
  socket.on("text-changed", (newText) => {
    sharedText = newText;
    socket.broadcast.emit("text-updated", newText);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Server listening on http://localhost:3001");
});
