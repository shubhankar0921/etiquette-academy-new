import "./chat_style.css"
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../config'
import "./chat_style.css"
import { useNavigate } from "react-router-dom";



export default function Chat() {
    const navigate = useNavigate();
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"add_chat")
    let authenticated = localStorage.getItem("Authenticated")
    let email = localStorage.getItem("email")
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
    return (
        <div className="chats">
            {list.map((post) =>{
                if (post.member1 == email) {
                return <div className="chat_item" id="my_post">
                    <h1>{post.member2}</h1>
                    <button onClick={()=>{
                        localStorage.setItem("sender",post.member1)
                        localStorage.setItem("receiver",post.member2)
                        navigate("/chat-room")
                    }} className="enter">CHAT</button>
                </div>
                }
                if (post.member2 == email) {
                return <div className="chat_item" id="my_post">
                    <h1>{post.member1}</h1>
                    <button onClick={()=>{
                        localStorage.setItem("sender",post.member2)
                        localStorage.setItem("receiver",post.member1)
                        navigate("/chat-room")
                    }} className="enter">CHAT</button>
                </div>
                }
            })}
            
        </div>
    )
}