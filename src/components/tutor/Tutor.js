import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { db } from '../../config'
import "./tutor_style.css"
import { useNavigate } from "react-router-dom";



export default function Tutor() {
    const navigate = useNavigate();
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"tutor")
    let authenticated = localStorage.getItem("Authenticated")
    let email = ""
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
    return (
        <div className="find">
            {list.map((post) =>{
                return <div className="post">
                    <h2>{post.name}</h2>
                    <p>Qualifications : {post.education}</p>
                    <p>Can Help You Out In : {post.field}</p>
                    <p>Cost of Crash Course : {post.crash_course} rupees</p>
                    <p>Cost of Supscription : {post.supscription} / month</p>
                    {authenticated?
                    <button className="ask" onClick={()=>{
                        localStorage.setItem("owner_mail",post.email)
                        navigate("/learn-request");
                        window.location.reload()
                    }}>Learn Request</button>
                    :
                    <button className="ask" onClick={()=>{
                        navigate("/profile");
                        window.location.reload()
                    }}>Learn Request</button>
                }
                </div>
            })}
            <Link to="/become-tutor" className="add_teacher">+</Link>
            
        </div>
    )
}