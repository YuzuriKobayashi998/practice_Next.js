"use client"
import { useState } from "react"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handlesubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: {
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const jsonData = await response.json()
            localStorage.setItem("token", jsonData)
            alert(jsonData.message)
        } catch {
            alert("ログイン失敗")
        }
    }
    return (
        <div>
            <h1>ログイン</h1>
            <form onSubmit={handlesubmit}>
                {/* onChange={(e)=>setEmail(e.target.value)}→入力が変更されたら内容を更新するという意味 */}
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="メールアドレス" required/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="パスワード" required/>
                <button>ログイン</button>
            </form>
        </div>
    )
}

export default Login