import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModeles";

export async function DELETE(request, context){
    try{
        const params = await context.params; // ★ ここが重要
        const id = params.id;
        await connectDB()
        await ItemModel.deleteOne({_id: id})
        return NextResponse.json({message: "アイテム削除成功"})
    } catch {
        return NextResponse.json({message: "アイテム削除失敗"})
    }
}