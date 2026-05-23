import { useState } from "react"

function NameChanger(){
    const [name , setName ] = useState("Pankaj")


return (
    <div style = {{textAlign : "center", marginTop: "40px"}}>
        <h2> Hello, {name}! </h2>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <button onClick={() => setName('Pankaj')} style={{padding : "10px 20px"}}>
                Pankaj
            </button>
            <button onClick={() => setName('Dipak')} style={{padding : "10px 20px"}}>
                Dipak
            </button>
            <button onClick={() => setName('Kamlesh')} style={{padding : "10px 20px"}}>
                Kamlesh
            </button>
         </div>
    </div>
   )
}

export default NameChanger