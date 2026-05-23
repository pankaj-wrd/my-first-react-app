// Step 8: The children Prop
// There's a special prop called children. It's whatever you put between the opening and closing tags of a component. Create a new file Card.jsx in topic2-props:

function Card({ title, children } ){
    return(
        <div style={{
            border: "1px solid gray",
            padding : "20px",
            borderRadius: "10px",
            width: "300px"
        }}>
         <h2>{title}</h2>
         <div>{children}</div>
        </div>
    )
}
export default Card