import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import { useNavigate } from "react-router-dom";
import "./become_tutor.css"


export default function Become_tutor() {
    const navigate = useNavigate();

    const [education, seteducation] = useState("")
    const [crash_course, setcrash_course] = useState("")
    const [supscription, setsupscription] = useState("")
    const [field, setfield] = useState("")
    

    const email = localStorage.getItem("email")
    const owner_mail = localStorage.getItem("owner_mail")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")
    

    const Login_redirect = () => {
        navigate("/profile")
        window.location.reload()
    }

    const collection_ref = collection(db,"tutor")
    const Sumbit =  async() =>{
        if (education !=="" & crash_course !== "" & supscription!=="" & field!=="" ) {
            await addDoc(collection_ref, { education, crash_course, supscription, field, name, email, owner_mail})
            navigate("/tutor")
            window.location.reload()
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Ask To Teach You Etiquettes</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        
                        <label id="start-location-label">
                            <h5 className="input_label" id="Qualification-label-h5">Your Qualification : </h5>
                            <input className="input_form" type="text" placeholder="Your Qualification ?" name="Qualification" id="Qualification" onChange={(event)=>{seteducation(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Qualification-label-h5">You Can Help People In : </h5>
                            <input className="input_form" type="text" placeholder="Interview, Date, etc" name="Qualification" id="Qualification" onChange={(event)=>{setfield(event.target.value)}} />
                        </label>
                        <label id="end-location-label">
                            <h5 className="input_label" id="Crash-Course-Cost-label-h5">Crash Course Cost : </h5>
                            <input className="input_form" type="text" placeholder="In rupees" name="Crash-Course-Cost" id="Crash-Course-Cost" onChange={(event)=>{setcrash_course(event.target.value)}} />
                        </label>
                        <label id="phone-number-label">
                            <h5 className="input_label" id="supscription-label-h5">Your Supscription Cost : </h5>
                            <input className="input_form" type="text" placeholder="In rupees" name="supscription" id="supscription" onChange={(event)=>{setsupscription(event.target.value)}} />
                        </label>
                        
                        

                        
                </div>
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}