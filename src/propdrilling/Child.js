import GrandChild from "./GrandChild";


const Child=({secret})=>{
    return(
        <div className="child">
            <h1>I am child</h1>
            <p>{secret.familyName}</p>

           <GrandChild secret={secret}/>
        </div>
    )

}
export default Child;