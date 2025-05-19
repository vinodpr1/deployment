import express from "express"
import {prismaClient} from "@repo/prisma/prismaClient"

const app = express();

app.get("/", async(req, res)=>{
    const users = await prismaClient.user.findMany();
    res.status(200).json({
        message:"Listening to endpoint kkk",
        user: users
    })
})

app.get("/users", (req, res)=>{
    res.status(200).json({
            users : [
              {
                "id": 1,
                "name": "Alice Johnson",
                "email": "alice@example.com",
                "avatar": "https://api.placeholder.com/150x150",
                "role": "admin",
                "created_at": "2024-01-15T10:30:00Z",
                "last_login": "2024-05-18T14:22:00Z",
                "status": "active"
              },
              {
                "id": 2,
                "name": "Bob Smith",
                "email": "bob@example.com",
                "avatar": "https://api.placeholder.com/150x150",
                "role": "user",
                "created_at": "2024-02-20T09:15:00Z",
                "last_login": "2024-05-19T08:45:00Z",
                "status": "active"
              },
              {
                "id": 3,
                "name": "Carol Davis",
                "email": "carol@example.com",
                "avatar": "https://api.placeholder.com/150x150",
                "role": "moderator",
                "created_at": "2024-03-10T16:20:00Z",
                "last_login": "2024-05-17T12:30:00Z",
                "status": "inactive"
              }
            ]
    }) 
})

app.listen(8000,()=>{
    console.log("Running on port no 8000");
})