import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()
export function GET(){
    console.log("------------GET request arrived---------")


    return Response.json({
        email:"rohangeorge77@gmail.com",
        name:"Rohan R George"
    })
}

export async function POST(req : NextRequest){

    const body = await req.json()
    console.log(body)
    let res =await client.user.create({
        data:{
            "username": body.username,
            "password":body.password
        }
    })

    console.log(res)

    console.log("------------POST request arrived---------")
    return Response.json({
        email:body.username,
        name:body.username,
        status:200,
        msg:"Logged in Sucessfully!!"
    })
}


export function PUT(){

    console.log("------------PUT request arrived---------")
    return Response.json({
        email:"rohangeorge77@gmail.com",
        name:"Rohan R George"
    })
}

