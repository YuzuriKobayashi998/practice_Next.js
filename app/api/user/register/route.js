import connectDB from "../../../utils/database";
import { NextResponse } from "next/server";
import { UserModel } from "../../../utils/schemaModeles";

export async function POST(request){
    const reqBody = await request.json()
    try{
        await connectDB()
        await UserModel.create(reqBody)
        return NextResponse.json({message: "ユーザー登録成功"})
    } catch {
        return NextResponse.json({message: "ユーザー登録成功"})
    }
}