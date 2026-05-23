import ProfileCard from "./ProfileCard"

function Topic1Page() {
  return (
    <>
    <h2 style={{ textAlign: "center", marginTop: "50px", borderTop: "2px solid gray", paddingTop: "30px" }}>
      Topic 1: JSX
     </h2>
    <div className="topic1-jsx" style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "30px" }}>
      <ProfileCard />
      <ProfileCard />
    </div>
    </>
  )
}

export default Topic1Page