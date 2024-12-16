import Image from "next/image";
import T1 from "../Texts/t1";
import logo from "@/public/logo/logo.png";
import Link from "next/link";
import "./globals.css";

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
    gap: '50px',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const logoStyle = {
    width : '70px',
    height : '70px',
}

export default function LaNav() {
    return (
        <div style={nav}>
            <Link href={"/"} style={left}>
                {/* You can add content or components here for the left section */}
                <Image src={logo} alt="logo" style={logoStyle}></Image>
            </Link>
            <div className="La-middle">
                <T1 text="Explore" />
                <T1 text="Problems" />
                <T1 text="Ranking" />
            </div>
            <div style={right}>
                <Link href={"/login"}>
                    <button className="La-signup" role="button">Login</button>
                </Link>
            </div>
        </div>
    );
}
