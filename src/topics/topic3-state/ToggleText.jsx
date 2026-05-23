import { useState } from "react"

function ToggleText(){
    const [isVisible, setIsVisible] = useState(true)
    return (
       <div style={{textAlign: "center", marginTop: "40px"}}>
            <button onClick={() => setIsVisible(!isVisible)}
            style={{ padding: "10px 20px", fontSize: "16px" }}>
              {isVisible ? "Hide" : "Show"} Text
            </button>
            {isVisible && <p style={{ marginTop: "20px", fontSize: "20px" }}>Now you see me!</p>}
       </div>
    )
}
export default ToggleText