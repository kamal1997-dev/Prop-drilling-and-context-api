import Child from "./Child"
import { FamilyContext } from "./FamilyContext"
import { useContext } from "react"



const Parent=()=>{
     const secret=useContext(FamilyContext)
    return(
        <div className="parent">
            <h1>Hi Parent:{secret.familyName}</h1>
            <h2>{secret.onlyForParent()}</h2>
            <Child  />
        </div>
    )

}
export default Parent