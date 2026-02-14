import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModeles";

export async function GET(){
    try{
        await connectDB()
        //全ての
        const allItems = await ItemModel.find()
        return NextResponse.json({message: "アイテム読み込み成功（オール）", allItems: allItems})
    } catch {
        return NextResponse.json({message: "アイテム読み込み失敗（オール）"})
    }

}