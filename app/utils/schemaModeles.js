import mongoose from "mongoose"

const Schema = mongoose.Schema
//ItemSchemaで保存するデータの形と種類を定義する
const ItemSchema = new Schema({
    title: String,
    image: String,
    price: String,
    description: String,
    email: String,
})
//ItemSchemaで作ったデータの保存形式をItemModelにしてroute.jsで使えるようにする
export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema)