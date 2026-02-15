import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModeles";

export async function PUT(request, context){
    const reqBody = await request.json();
    try{
        const params = await context.params; // ★ ここが重要
        const id = params.id;
        await connectDB()
        await ItemModel.updateOne({_id: id}, reqBody)
        return NextResponse.json({message: "アイテム編集成功"})
    } catch {
        return NextResponse.json({message: "アイテム編集失敗"})
    }
}