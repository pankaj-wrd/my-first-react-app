import { useState } from "react";

function Counter(){
    const [ count, setCount ] = useState(0)

    function handleAdd(){
        setCount(count + 1)
    }
    function handleSubstract(){
        setCount(count - 1)
    }
    function handleReset(){
        setCount(0)
    }

    return(
     <div>
        <h2>Counter App</h2>
        <p style={{fontSize: "60px", margin: "20px" }}>{count}</p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center"}}>
            <button onClick ={handleSubstract} style={{padding: "10px 20px", fontSize: "18px"}}> 
               - Subtract
            </button>
            <button onClick ={handleReset} style={{padding: "10px 20px", fontSize: "18px"}}> 
               Reset
            </button>
            <button onClick ={handleAdd} style={{padding: "10px 20px", fontSize: "18px"}}> 
               + Add
            </button>
        </div>
     </div>   
    )
}

export default Counter