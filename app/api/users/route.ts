import { NextRequest } from "next/server"

export function GET(){
    console.log("------------GET request arrived---------")


    return Response.json({
        email:"rohangeorge77@gmail.com",
        name:"Rohan R George"
    })
}

export async function POST(req : NextRequest){

    const body = req.json()
    console.log(body)

    console.log("------------POST request arrived---------")
    return Response.json({
        email:"rohangeorge77@gmail.com",
        name:"Rohan R George",
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

