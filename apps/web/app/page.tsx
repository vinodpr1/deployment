import React from 'react'
import {prismaClient} from "@repo/db/prismaClient";
import axios from 'axios';



const page = async() => {

  const data = await axios.get("http://localhost:8000/");

  return (
    <div>
      hii
       {JSON.stringify(data.data)}
    </div>
  )
}

export default page