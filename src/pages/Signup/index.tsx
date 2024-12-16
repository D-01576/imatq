"use client"

import config from "@/config"
import axios from "axios"
import {GoogleIcon} from "@/src/icons/icons"

export default function SignUp(){
    const handleclick = async ()=>{
        const res = await axios.get(`${config.baseUrl}/auth/google`);
        window.location.href = res.data.URL;
    }
    return (
        <div className="b">
            <button onClick={handleclick} className="Signin_Btn"> <GoogleIcon></GoogleIcon>Sign in with Google</button>
        </div>
    )
}