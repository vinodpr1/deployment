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

app.listen(8000,()=>{
    console.log("Running on port no 8000");
})