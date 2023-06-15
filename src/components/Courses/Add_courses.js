import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import { useNavigate } from "react-router-dom";
import "../tutor/become_tutor.css"


export default function Add_courses() {
    const navigate = useNavigate();

    const [student, setstudent] = useState("")
    const [type, settype] = useState("")
    const [money, setmoney] = useState("")
    

    const email = localStorage.getItem("email")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")
    let teacher = email

    const Login_redirect = () => {
        navigate("/profile")
        window.location.reload()
    }

    const collection_ref = collection(db,"courses")
    const Sumbit =  async() =>{
        if (student !=="" & type !== "" & money!=="") {
            await addDoc(collection_ref, { student, type, money, teacher})
            navigate("/courses")
            window.location.reload()
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Add A Course To Teach You Etiquettes</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        
                        <label id="start-location-label">
                            <h5 className="input_label" id="Student-label-h5">Your Student Email : </h5>
                            <input className="input_form" type="text" placeholder="Your Student Email ?" name="Student" id="Student" onChange={(event)=>{setstudent(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="type-label-h5">Type Of Course : </h5>
                            <input className="input_form" type="text" placeholder="Crash Course OR Supscription" name="type" id="type" onChange={(event)=>{settype(event.target.value)}} />
                        </label>
                        <label id="end-location-label">
                            <h5 className="input_label" id="Money-label-h5">Fees Of Course : </h5>
                            <input className="input_form" type="text" placeholder="In rupees" name="money" id="money" onChange={(event)=>{setmoney(event.target.value)}} />
                        </label>                            
                </div>
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}