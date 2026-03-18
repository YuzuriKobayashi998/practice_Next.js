"use client"
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import useAuth from "../../../utils/useAuth"
//contextでページのオブジェクトを受け取る
//contextが変わったらuseEffectを実行
const UpdateItem = () => {
    const params = useParams()
    const id = params.id
    //入力された各項目を保管する入れ物集団
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const router = useRouter()
    const loginUserEmail = useAuth()

    //特定のタイミングで実行したい操作のとき（今回は1つのアイテムだけを読み込み）
    useEffect(() => {
        const getSingleItem = async(id) => {
    //${}を使うときはバッククォートで囲む
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cache: "no-store"})
    const jsonData = await response.json()
    const singleItem = jsonData.singleItem
    console.log(jsonData)
    setTitle(singleItem.title)
    setPrice(singleItem.price)
    setImage(singleItem.image)
    setDescription(singleItem.description)
    // setEmail(singleItem,email) 
    }

    getSingleItem(id)
    //useEffextの効果を一回だけに制限するcontext
},[id])

    const handlesubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`,{
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
            alert("アイテム編集失敗")
        }
    }
if(loginUserEmail === email){
    return(
        <div>
            <h1 className="page-title">アイテム編集</h1>
            <form onSubmit={handlesubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required/>
                <input value={price} onChange={(e) => setPrice(e.target.value)}  type="text" name="price" placeholder="価格" required/>
                <input value={image} onChange={(e) => setImage(e.target.value)}  type="text" name="image" placeholder="画像" required/>
                <textarea value={description} onChange={(e) => setDiscription(e.target.value)}  name="description" rows={15} placeholder="商品説明" required></textarea>
                <button>編集</button>
            </form>
        </div>
    )
} else {
    return <h1>権限がありません</h1>
}
}

export default UpdateItem