import {WebSocketServer} from "ws"
import {prismaClient} from "@repo/db/prismaClient";

const ws = new WebSocketServer({port:8100});

ws.on("connection", async(wss)=>{
    await prismaClient.user.create({
        data:{
            name:"Vinod k",
            email:"vinodpr7379@gmail.com",
            password:"vinod123"
        }
    });
    wss.send("Hello from my side");
    console.log("Connectedd");
})