"use client"
import { useState } from "react"
import { useRouter } from "next/router"
const CreateItem = () => {
    //入力された各項目を保管する入れ物集団
    const [title, setTitle] = useState("")
    const [price, setPlice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDiscription] = useState("")

    const router = useRouter()

    const handlesubmit = (e) =>{
        try{
            fetch("http://localhost:3000/api/user/create",{
                method: "POST",
                headers:{
                    "Accept": "application.json",
                    "Content-Type": "application.json"
                } ,
                body: JSON.stringify({
                    title: title,
                    price: price,
                    image: image,
                    description: description,
                    email:"ダミーデータ"
                })
                }
            )
            const jsonData = response.json
            alert(jsonData)
            //作成が完了したらトップ画面に戻る
            router.push("/")
            router.refresh()
        } catch {
            alert("アイテム作成失敗")
        }
    }

    return(
        <div>
            <h1>アイテム作成</h1>
            <form>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required/>
                <input value={price} onChange={(e) => setPrice(e.target.value)}  type="text" name="price" placeholder="価格" required/>
                <input value={image} onChange={(e) => setImage(e.target.value)}  type="text" name="image" placeholder="画像" required/>
                <textarea value={discription} onChange={(e) => setDiscription(e.target.value)}  name="description" rows={15} placeholder="商品説明" required></textarea>
                <button>作成</button>
            </form>
        </div>
    )
}

export default CreateItem