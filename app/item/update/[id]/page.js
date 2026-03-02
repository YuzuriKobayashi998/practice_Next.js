"use client"
//状態を管理するためのフック
import { useState } from "react"
//ページ遷移のためのフック
import { useRouter } from "next/router"

const CreateItem = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
}