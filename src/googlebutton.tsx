import React from "react";

function Google(props : any){
    const {log}= props;
    return(
        <>
            <div>
                <button onClick={()=> log()} className="bout">Google</button>
            </div>
        
        </>
    )
}
export default Google
 