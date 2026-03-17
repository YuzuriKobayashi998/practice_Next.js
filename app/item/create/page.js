"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import useAuth from "../../utils/useAuth"
const CreateItem = () => {
    //入力された各項目を保管する入れ物集団
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const router = useRouter()
    const loginUserEmail = useAuth()
    console.log(loginUserEmail)

    const handlesubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:3000/api/item/create",{
                method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    //middlewareにローカルストレージから取得したtokenを送っている
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                } ,
                body: JSON.stringify({
                    title: title,
                    price: price,
                    image: image,
                    description: description,
                    email:loginUserEmail
                })
                }
            )
            const jsonData = await response.json()
            alert(jsonData)
            //作成が完了したらトップ画面に戻る
            router.push("/")
            router.refresh()
        } catch {
            alert("アイテム作成失敗")
        }
    }
    //ログインをしないとアイテム作成を表示しないようにする
if(loginUserEmail){
    return(
        <div>
            <h1>アイテム作成</h1>
            <form onSubmit={handlesubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required/>
                <input value={price} onChange={(e) => setPrice(e.target.value)}  type="text" name="price" placeholder="価格" required/>
                <input value={image} onChange={(e) => setImage(e.target.value)}  type="text" name="image" placeholder="画像" required/>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}  name="description" rows={15} placeholder="商品説明" required></textarea>
                <button>作成</button>
            </form>
        </div>
    )
}
}

export default CreateItem