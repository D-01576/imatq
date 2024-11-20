import T1 from "../Texts/t1";

const nav = {
    width : '100vw',
    height : '10vh',
    display: 'flex',
    paddingLeft: '50px',
    paddingRight: '100px',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const left = {
    flex: 1,
};

const right = {
    display: 'flex',
    gap: '50px',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export default function LaNav() {
    return (
        <div style={nav}>
            <div style={left}>
                {/* You can add content or components here for the left section */}
            </div>
            <div style={right}>
                <T1 text="Explore" />
                <T1 text="Problems" />
                <T1 text="Ranking" />
                <T1 text="Sign in" />
            </div>
        </div>
    );
}
