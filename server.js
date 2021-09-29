import Update from "./src/components/Update";
const PORT = process.env.PORT || 8080;
const ENV = require("./budget_api/src/environment");
const app = require("./budget_api/src/applicaton")(ENV, {  });
const server = require("http").Server(app);

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", socket => {
  socket.onmessage = event => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});


// I am trying to make a "route" for a new "page"!!!!!
app.post("/Update", (request, response) => {
  console.log("This is the post")
  return <Update />
  
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
