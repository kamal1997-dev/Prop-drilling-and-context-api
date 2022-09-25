

import Parent from "./Parent"
import { FamilyContext } from "./FamilyContext"
import { useContext } from "react"


const Family=()=>{
   const secret= useContext(FamilyContext)
    return(
        <div   className="family">
            
            <Parent />

        </div>
        
    )

}
export default Family