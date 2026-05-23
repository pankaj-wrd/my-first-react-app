function MemberCardClean( { name, role, location, image } ){
    // Step 6: Default Props
    // What if someone uses your component but forgets to pass a prop? The app might break or show "undefined". You can set default values:
    
    // function MemberCardClean({ name = "Unknown", role = "Team Member", location = "India", image = "https://i.pravatar.cc/150" }) {
     
    return (
        <div style = {{
            border:"1px solid gray",
            padding: "20px",
            borderRadius : "10px",
            textAlign: "center"
        }}>
        <img
            src={image}
            alt={name}
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />
        <h2>{name}</h2>
        <p style={{ color: "gray" }}>{role}</p>
        <p>{location}</p>

        </div>
    )
}

export default MemberCardClean