import React from 'react'
import "./add_chat_style.css"
import { addDoc, collection } from 'firebase/firestore'
import {MessageAdd1} from "iconsax-react"
import { useNavigate } from "react-router-dom";
import { db } from '../../config'

export default function Add_chat() {
    const navigate = useNavigate();
    let member1 = localStorage.getItem("member1")
    let member2 = localStorage.getItem("member2")

    const collection_ref = collection(db,"add_chat")
    const Reply =  async() =>{
            await addDoc(collection_ref, { member1, member2})
            navigate("/chat")
            window.location.reload()
            localStorage.removeItem("member1")
            localStorage.removeItem("member2")

    }

  return (
    <div className='add_chat'>
        <h1>{member1}</h1>
        <MessageAdd1
            size="50"
            color="#FF8A65"
        />
        <h1>{member2}</h1>
        <button onClick={Reply} className='create'>CREATE CHAT ROOM</button>
    </div>
  )
}