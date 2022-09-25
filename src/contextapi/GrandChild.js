import { FamilyContext } from "./FamilyContext"
import { useContext } from "react"
const GrandChild=()=>{
    const secret=useContext(FamilyContext)
    return (
        <div className="gc">
     <p>grandchilds:{secret.onlyForgrandChild()}</p>
        </div>
    )

}
export default GrandChild;