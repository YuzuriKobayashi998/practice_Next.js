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
//ログインユーザーを保存するデータの形と種類を定義する
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
        password: {
        type: String,
        required: true,
    },
})
//ItemSchemaで作ったデータの保存形式をItemModelにしてroute.jsで使えるようにする
export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema)

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)