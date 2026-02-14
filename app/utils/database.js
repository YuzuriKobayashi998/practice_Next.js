import mongoose from "mongoose"
//databaseとの接続をするファイル
const connectDB = async () =>{
    try{
        //awaitを追記することでそのコードが終わってから次のコードを実行するようにする
        await mongoose.connect("mongodb+srv://kobayashiyuzuri_db_user:Oudon1192%40@cluster0.viowztl.mongodb.net/nextAppDataBase?appName=Cluster0")
        console.log("Succes: Connected to MongoDB")
    }catch{
        
        console.log("Failure: Unconnected to MongoDB")
        throw new Error
    }
}

export default connectDB