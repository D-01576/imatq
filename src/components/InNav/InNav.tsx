"use client"
import Image from "next/image";
import T1 from "../Texts/t1";
import logo from "@/public/logo/logo.png";
import "./globals.css";
import { BellIcon, StarIcon } from "@/src/icons/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = {
    width : '100vw',
    height : '13vh',
    display: 'flex',
    paddingLeft: '20px',
    paddingRight: '50px',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const left = {
    display : 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const right = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    flexDirection : 'column'
};

const logoStyle = {
    width : '70px',
    height : '70px',
}

const middle = {
    
}

export default function InNav({img, name} : {img : string, name : string}) {
    const [open,setOpen] = useState(false)
    useEffect(() => {
        const handleClick = (e) => {
            if(!e.target.closest(".profile_img") && !e.target.closest(".popup")){
                console.log(e.target.closest(".popup"))
                const popup = document.querySelector(".popup") as HTMLElement;
                popup.style.display = 'none';
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
          document.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <div style={nav}>
            <Link href={"/"} style={left}>
                {/* You can add content or components here for the left section */}
                <Image src={logo} alt="logo" style={logoStyle}></Image>
            </Link>
            <div style={middle} className="In-middle">
                <T1 text="Explore" />
                <Link href={"problems"} ><T1 text="Problems"/></Link>
                <T1 text="Contests" />
                <T1 text="Ranking" />
                <T1 text="Discuss"/>
            </div>
            <div style={right}>
                <div className="another">
                    <BellIcon></BellIcon>
                    <StarIcon></StarIcon>
                    <Image src={img} alt="jadf" width={30} height={30} className="profile_img" onClick={()=>{
                        const popup = document.querySelector(".popup") as HTMLElement;
                        if(open){
                            popup.style.display = 'none';
                        }else{
                            popup.style.display = 'flex';
                        }
                        setOpen(!open)
                    }}></Image>
                </div>
                <div className="popup">
                    <div className="top_Pop">
                        <Image src={img} alt="jkdf" width={60} height={60} className="profile_img pop_img"></Image>
                        <h2 className="name_pop">{name}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
