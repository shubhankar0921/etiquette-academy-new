import React, { useEffect,useState } from 'react'
import { getDocs,addDoc, collection } from 'firebase/firestore'
import { db } from '../../config'
import { useNavigate } from "react-router-dom";
import "./chat_room_style.css";
import {Send2} from "iconsax-react"

export default function Chat_room() {
    const navigate = useNavigate()
    const [Message, setMessage] = useState("")
    let sender = localStorage.getItem("sender")
    let receiver = localStorage.getItem("receiver")
    let email = localStorage.getItem("email")
    const [list, setlist] = useState([])
    let date = new Date;
    let number = 1;


    const collection_ref = collection(db,"chats")
    const Sumbit =  async() =>{
        if (Message!=="" ) {
            await addDoc(collection_ref, { Message, sender , receiver, number})
            setMessage("")
            window.location.reload()
            number +=1
        }else{
            alert("kindly write a message")
        }
    }

    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
  return (
    <div className='chat_room'>
        <div className="chats">

            
            <div className="chat_recieved">
                {list.map((post) =>{
                    if (post.sender == receiver & post.receiver == sender) {
                    return <div className="chat_message_recieved" >
                        <h3>{post.Message}</h3>
                    </div>
                    }
                    
                })}
                
            </div>
            <div className="chat_sended">
                {list.map((post) =>{
                    if (post.sender == sender & post.receiver == receiver) {
                    return <div className="chat_message_sended" >
                        <h3>{post.Message}</h3>
                        
                    </div>
                    }
                    
                })}
                
            </div>
        </div>
        <div className="message_div">
            <input className="message" type="text" placeholder="Type Your Message..........." name="Message" id="message" onChange={(event)=>{setMessage(event.target.value)}} />
            <Send2 onClick={Sumbit} className='send' size="32" color="#FF8A65"/>
        </div>

        

    </div>
  )
}