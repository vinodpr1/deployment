import {WebSocketServer} from "ws"

const wss= new WebSocketServer({port:8100});

wss.on("connection", (ws)=>{
   ws.send("Hello to everyone");
   console.log("Connectedd");
})