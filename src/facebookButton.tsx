import React from "react";

function Facebook(props: any){
    const {log}= props
    return(
        <>
        
        <button onClick={()=> log()} className="bout">Facebook</button>
        </>
    )
}
export default Facebook;