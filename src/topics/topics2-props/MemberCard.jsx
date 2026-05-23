function MemberCard(props){
    return (
        <div style={{
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            textAlign: "center"
        }}>
            <img 
              src={props.image}
              alt={props.name}
              style ={{ borderRadius: "50%", width: "100px", height: "100px"}}
              />
              <h2>{props.name}</h2>
              <p style={{ color : "gray"}}>{props.role}</p>
              <p>{props.location}</p>
        </div>
    
    )
}

export default MemberCard