import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { db } from '../../config'
import "../tutor/tutor_style.css"
import { useNavigate } from "react-router-dom";



export default function Course_sell() {
    const navigate = useNavigate();
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"courses")
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
        <div className="find">
            {list.map((post) =>{
                if (post.teacher == email) {
                    return <div className="post">
                        <h2>{post.type}</h2>
                        <p>Student : {post.student}</p>
                        <p>Teacher : {post.teacher}</p>
                        <p>Cost of {post.type} : {post.money} rupees</p>
                    </div>
                    
                }
            })}
            <Link to="/add-course" className="add_teacher">+</Link>
            
        </div>
    )
}