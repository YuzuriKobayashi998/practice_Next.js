import { jwtVerify } from "jose"
import { useRouter } from "next/navigation"
import { useState } from "react" 

const useAuth = () => {
    const [loginUserEmail, setLoginUserEmail] = useState("") 
    const router = useRouter()
    const token = localStorage.getItem("token")
    //ここではトークンがあるかないかを判断
    if(!token){
        router.push("/user/login")
    }

    try{
        //eccoderで文字列をバイトデータに変換
        const secretKey = new TextEncoder().encode("next-market-app-book")
        //トークンと照合するか検証
        const decodedJwt = jwtVerify(token, secretKey)
        setLoginUserEmail(decodedJwt.payload.email)
    } catch {
        //ここではトークンが有効か無効かを判断し、無効であればログイン画面に戻す
        router.push("/user/login")
    }
}

export default useAuth