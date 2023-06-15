import {  collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { db } from '../../config'
import "../tutor/tutor_style.css"



export default function Request_recieved() {
    let email = localStorage.getItem("email")
    const navigate = useNavigate();
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"learn_request")
    let authenticated = localStorage.getItem("Authenticated")
    let member1 = email

    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })

    const Reply = (member2)=>{
        localStorage.setItem("member1",email)
        localStorage.setItem("member2",member2)
        setTimeout(() => {
        }, 2000);
    }
    
    return (
        <div className="find">
            {list.map((post) =>{
                if (post.owner_email == email) {
                    
                return <div className="post" id="my_post">
                    <h2>{post.name}</h2>
                    <p>Course : {post.course} </p>
                    <p>Money Willing To Pay : {post.money}</p>
                    <button onClick={()=>{
                        localStorage.setItem("member1",email)
                        localStorage.setItem("member2",post.email)
                        navigate("/add_chat")

                    }} className="reply">REPLY BACK</button>
                
                </div>
                }
            })}
            
        </div>
    )
}