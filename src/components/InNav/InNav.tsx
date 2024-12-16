import Image from "next/image";
import T1 from "../Texts/t1";
import logo from "@/public/logo/logo.png";
// import Link from "next/link";
import "./globals.css";
import { BellIcon, StarIcon } from "@/src/icons/icons";
import Link from "next/link";

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
};

const logoStyle = {
    width : '70px',
    height : '70px',
}

const middle = {
    
}

export default function InNav() {
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
                <BellIcon></BellIcon>
                <StarIcon></StarIcon>
            </div>
        </div>
    );
}
