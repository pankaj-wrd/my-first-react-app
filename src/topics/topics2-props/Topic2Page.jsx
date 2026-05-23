import MemberCard from "./MemberCard"
import MemberCardClean from "./MemberCardClean"
import Card from "./Card"

function Topic2Page() {
  return (
    <>
      <div className="topic2-props" style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "30px", flexWrap: "wrap" }}>
        <MemberCard
          name="Pankaj Warade"
          role="React Developer"
          location="Pune, India"
          image="https://i.pravatar.cc/150?img=3"
        />
        <MemberCard
          name="Dipak giri"
          role="Data Enginer"
          location="Pune, India"
          image="https://i.pravatar.cc/150?img=5"
        />
        <MemberCard
          name="Kamlesh Khatavkar"
          role="AWS/DevOPs Eng"
          location="Pune, India"
          image="https://i.pravatar.cc/150?img=9"
        />
        <MemberCard
          name="Swapnil Kachewar"
          role="System Admin"
          location="Pune, India"
          image="https://i.pravatar.cc/150?img=4"
        />
      </div>

      <div className="topic2-destructuring" style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "30px", flexWrap: "wrap" }}>
        <MemberCardClean
          name="Pankaj Warade"
          role="React Developer"
          location="Pune, India"
          image="https://i.pravatar.cc/150?img=3"
        />
      </div>

      <div className="topic2-children" style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "30px", flexWrap: "wrap" }}>
        <Card title="About Me">
          <p>I am a React developer from Mumbai.</p>
          <p>I love building web apps.</p>
        </Card>
        <Card title="My Skills">
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </Card>
      </div>
    </>
  )
}

export default Topic2Page