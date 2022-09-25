

import Parent from "./Parent"
const secret={
    familyName:"Will smith family",
    onlyForParent:function(){
        return " parents can see"
    },
    onlyForgrandChild:function(){
        return " grandchilds can see"
    }

}


const Family=()=>{
    return(
        <div   className="family">
            
            <Parent secret={secret}/>

        </div>
        
    )

}
export default Family