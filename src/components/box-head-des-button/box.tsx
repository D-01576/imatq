import "./global.css"

export default function Box(props : {name :string, des : string, btnName : string}){
    return (
        <div className="box-head-des-btn">
            <h2 className="name">{props.name}</h2>
            <h3 className="des">{props.des}</h3>
            <button className="btn">{props.btnName}</button>
        </div>
    )
}