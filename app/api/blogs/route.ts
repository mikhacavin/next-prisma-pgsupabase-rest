//handling rest api , custom request 

import prisma from "@/prisma"
import { NextResponse } from "next/server"

export async function connect(){
    try {
        await prisma.$connect();
    } catch (err) {
        return Error("database connection not successful")
    }
}

//GET ALL POSTS
export const GET = async ( req: Request, res: Response) =>{
    try{
        await connect();
        const posts = await prisma.post.findMany();
        return NextResponse.json({message: "Success", posts}, {status: 200})
    }catch(err){
        return NextResponse.json({ message: "Error", err },{ status: 500 })
    }finally{
        await prisma.$disconnect();
    }
}

//STORE NEW POST
export const POST = async ( req: Request, res: Response) =>{
    try{
        const {title, description} = await req.json()
        await connect();
        const post = await prisma.post.create({data: {title, description}})
        return NextResponse.json({message: "Success", post}, {status: 201})
    }catch(err){
        return NextResponse.json({ message: "Error", err },{ status: 500})
    }finally{
        await prisma.$disconnect();
    }
}

