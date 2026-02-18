import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModeles";


export async function DELETE(request, context){
    const reqBody =  await request.json();
    try{
        const params = await context.params; // ★ ここが重要
        const id = params.id;
        await connectDB()
        const singleItem = ItemModel.findById(id)
        if(singleItem.email === reqBody.email){
            await ItemModel.deleteOne({_id: id})
            return NextResponse.json({message: "アイテム削除成功"})
        } else {
            return NextResponse.json({message: "アイテム削除失敗：他人が作成したアイテムです"})
        }
    } catch {
        return NextResponse.json({message: "アイテム削除失敗"})
    }
}
    export const revaldate = 0