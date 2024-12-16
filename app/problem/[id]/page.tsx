export default function problem({params} : {params : {id : string}}){
    const {id} = params
    return(
        <div>
            {id}
        </div>
    )
}