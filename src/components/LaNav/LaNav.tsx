import Image from "next/image";
import T1 from "../Texts/t1";
import logo from "@/public/logo/logo.png"
import Link from "next/link";

const nav = {
    width : '100vw',
    height : '13vh',
    display: 'flex',
    paddingLeft: '50px',
    paddingRight: '100px',
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
    width : '100px',
    height : '100px',
}

const log = {
    color: 'var(--foreground)',
    fontSize : '30px',
    fontWeight : '500',
    fontFamily : ''
}

export default function LaNav() {
    return (
        <div style={nav}>
            <div style={left}>
                {/* You can add content or components here for the left section */}
                <Image src={logo} alt="logo" style={logoStyle}></Image>
                <div style={log}>Imatq</div>
            </div>
            <div style={right}>
                <T1 text="Explore" />
                <T1 text="Problems" />
                <T1 text="Ranking" />
                <Link href={"/signin"}>
                <T1 text="Sign in" /></Link>
            </div>
        </div>
    );
}
