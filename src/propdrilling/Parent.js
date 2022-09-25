import Child from "./Child"



const Parent=({secret})=>{
    return(
        <div className="parent">
            <h1>Hi Parent:{secret.familyName}</h1>
            <h2>{secret.onlyForParent()}</h2>
            <Child  secret={secret}/>
        </div>
    )

}
export default Parent