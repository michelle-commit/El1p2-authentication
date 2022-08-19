import React from "react";

function Github(props : any){
    const {log}= props;
    return(
        <>
        
        <button onClick={()=>log()} className="bout" >Github</button>
        </>
    )
}
export default Github;