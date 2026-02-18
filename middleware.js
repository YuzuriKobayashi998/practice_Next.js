import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request){
    const token = await rewuest.headers.get("Authorization")?.split("")[1]
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)
        return NextResponse.next()
    } catch {
        return NextResponse.json({message: "トークンが正しくありません。ログインしてください"})
    }
}
//ミドルウェアの範囲を下記のURLに限定している
export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*","/api/item/delete/:path*"],
}