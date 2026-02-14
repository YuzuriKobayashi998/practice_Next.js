import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModeles";

export async function GET(request, context){
    try{
        const params = await context.params; // ★ ここが重要
        const id = params.id;
        await connectDB()
        const singleItem = await ItemModel.findById(id)
        return NextResponse.json({message:"アイテム読み込み成功(シングル)",singleItem: singleItem})
    } catch {
        return NextResponse.json({message:"アイテム読み込み成功(シングル)"})
    }
}