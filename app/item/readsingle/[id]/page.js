import Image from "next/image"

const getSingleItem = async(id) => {
    //${}を使うときはバッククォートで囲む
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cache: "no-store"})
    const jsonData = await response.json()
    console.log(jsonData.singleItem)
    const singleItem = jsonData.singleItem
    return singleItem
}

const ReadSingleItem = async({params}) =>{
    const {id} = await params
    const singleItem = await getSingleItem(id)
    console.log(singleItem)
    return (
        <div>
            <div>
                <Image src={singleItem.image} width={750} height={500} alt="item-image" priority />
            </div>
            <div>
                <h1>{singleItem.item}</h1>
                <h2>{singleItem.price}</h2>
                <hr/>
                <p>{singleItem.description}</p>
            </div>
        </div>
    )
}

export default ReadSingleItem