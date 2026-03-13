"use client"
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
//contextでページのオブジェクトを受け取る
//contextが変わったらuseEffectを実行
const DeleteItem = (context) => {
    const params = useParams()
    const id = params.id
    //入力された各項目を保管する入れ物集団
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")

    const router = useRouter()

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
    setEmail(singleItem,email) 
    }

    getSingleItem(id)
    //useEffextの効果を一回だけに制限するcontext
},[id])

    const handlesubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:3000/api/item/delete/${id}`,{
                method: "DELETE",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    //middlewareにローカルストレージから取得したtokenを送っている
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                } ,
                body: JSON.stringify({
                    email:"ダミーデータ"
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

    return(
        <div>
            <h1>アイテム削除</h1>
            <form onSubmit={handlesubmit}>
                <h2>{title}</h2>
                <Image src={image} width={750} height={500} alt="item-image" priority/>
                <h3>¥{price}</h3>
                <p>{description}</p>
                <button>削除</button> 
            </form>
        </div>
    )
}

export default DeleteItem