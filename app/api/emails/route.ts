import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import prisma from "@/prisma/db"
const subscribeEmail = z.object({
    email: z.string().email()
})
export async  function POST(request: NextRequest){
    const body = await request.json();
    const ip = request.ip;
    const validation = subscribeEmail.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status:400})
    const newEmail = await prisma.email.create({
        data:{email:body.email}
    })
    return NextResponse.json(newEmail,{status:201})
} 