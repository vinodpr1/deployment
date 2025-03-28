import  express from "express"
import {prismaClient}  from "@repo/db/prismaClient";

const app= express();

app.get("/", async(req,res)=>{
   const data = await prismaClient.user.findMany({});
   res.json({
      message: "Hello from here",
      data:{
         data
      }
   })
})

app.listen(8000,()=>{
console.log("App is up and running on port no 8000");
})