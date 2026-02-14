import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModeles"

export async function POST(request){
    const reqBody = await request.json()
  try{
    await connectDB()
    //ItemModelでMongoDBに接続する。createは書き込みのメソッド。引数のデータを保存する
    await ItemModel.create(reqBody)
    return NextResponse.json({message:"アイテム作成成功"})
  } catch {
    return NextResponse.json({message:"アイテム作成失敗"})
  }
}

