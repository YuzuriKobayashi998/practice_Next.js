import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import connectDB from "../../../utils/database";
import { UserModel } from "../../../utils/schemaModeles";

export async function POST(request){
    const reqBody = await request.json()
    try{
        await connectDB()
        //oneを使う場合、何を基準にデータを取得するかを記述する必要がある
        const SaveUserData = await UserModel.findOne({email: reqBody.email})
        if(SaveUserData){
            if(reqBody.password === SaveUserData.password){
                //TextEncoder().encodeは文字列をエンコードするコード
                const secretKey = new TextEncoder().encode("next-market-app-book")
                const payload = {
                    email: reqBody.email
                }
                const token = await new SignJWT(payload)
                                .setProtectedHeader({alg:"HS256"})
                                .setExpirationTime("1d")
                                .sign(secretKey)
                // console.log(token)
                return NextResponse.json({message: "ログイン成功", token: token})
            } else {
                return NextResponse.json({message: "ログイン失敗：パスワードが違います"})
            }
        } else {
            return NextResponse.json({message: "ログイン失敗：ユーザー登録をしてません"})
        }
    } catch {
        return NextResponse.json({message: "ログイン失敗"})
    }
}