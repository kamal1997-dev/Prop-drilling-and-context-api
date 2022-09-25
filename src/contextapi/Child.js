import GrandChild from "./GrandChild";
import { FamilyContext } from "./FamilyContext"
import { useContext } from "react"

const Child=()=>{
    const secret=useContext(FamilyContext);
    return(
        <div className="child">
            <h1>I am child</h1>
            <p>{secret.familyName}</p>

           <GrandChild />
        </div>
    )

}
export default Child;