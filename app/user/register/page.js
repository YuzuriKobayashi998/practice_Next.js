"use client"
import {useState} from "react"
const Register = () => {
    //setNameを使ってnameの中身をuseState("")に書かれたものに変えている
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //送信データを取りまとめる
    const handlesubmit = async (e) =>{
        e.preventDefault()
        try {
            //fetch全体がバックエンドのデータを受け取る仕組み
            const response = await fetch("http://localhost:3000/api/user/register", {
                method: "POST",
                //データの種類や捕捉情報を書く箇所
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                //バックエンドに送りたいデータ
                //HTTP通信では文字列しか送れないためJSONで文字列にしている
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            //responseはストリームという形式なのでjson形式を変える
            const jsonData = await response.json()
            alert(jsonData.message)
        } catch {
            alert("ユーザー登録失敗")
        }
    }
    return(
        <div>
            <h1>ユーザー登録</h1>
            {/* 従来のHTMLのデータ送信 */}
            {/* <form action="https://localhost:3000/api/user/register" method="POST"> */}
            <form onSubmit = {handlesubmit} >
                <input value={name} onChange={(e) => setName(e.target.value)} type ="text" name="name" placeholder="名前" required/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type ="text" name="email" placeholder="メールアドレス" required/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type ="password" name="password" placeholder="パスワード" required/>
                <button>登録</button>
            </form>
        </div>
    )
}

export default Register