import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import "./become_tutor.css"
import { useNavigate } from "react-router-dom";


export default function Become_tutor() {
    const navigate = useNavigate();

    const [course, setcourse] = useState("")
    const [money, setmoney] = useState("")

    const email = localStorage.getItem("email")
    const owner_email = localStorage.getItem("owner_mail")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")
    

    const Login_redirect = () => {
        navigate("/profile")
        window.location.reload()
    }

    const collection_ref = collection(db,"learn_request")
    const Sumbit =  async() =>{
        if (course !== "" & money!=="") {
            await addDoc(collection_ref, {course, money, owner_email, name, email})
            navigate("/tutor")
            localStorage.removeItem("owner_mail")

            window.location.reload()
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Wanna Teach Other People Etiquettes ?</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                    <label id="end-location-label">
                        <h5 className="input_label" id="Crash-Course-Cost-label-h5">Course Type : </h5>
                        <input className="input_form" type="text" placeholder="Write one of these -> Crash Course Or Supscription" name="Crash-Course-Cost" id="Crash-Course-Cost" onChange={(event)=>{setcourse(event.target.value)}} />
                    </label>
                    <label id="phone-number-label">
                        <h5 className="input_label" id="supscription-label-h5">How Much Money You Are Willing To Pay : </h5>
                        <input className="input_form" type="text" placeholder="in rupees" name="supscription" id="supscription" onChange={(event)=>{setmoney(event.target.value)}} />
                    </label>

                </div>
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}