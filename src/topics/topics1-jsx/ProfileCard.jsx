function ProfileCard(){
    return (
        <div syle= {{ border : "1px solid gray", padding : "20px", width: "300px", borderRadius: "10px", textAlign: "center"}}>
            <img
               src="https://i.pravatar.cc/150?img=3"
               alt="Profile Photo"
               style={{borderRadius:"50%", width:"120px", height:"120px"}}
               />
            <h2>Pankaj Warade</h2>
            <p>React Developer</p>
             <p>Pune, India</p>

        </div>
    )
}
export default ProfileCard