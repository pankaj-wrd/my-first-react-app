import ProfileCard from "./ProfileCard"

function Topic1Page() {
  return (
    <div className="topic1-jsx" style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "30px" }}>
      <ProfileCard />
      <ProfileCard />
    </div>
  )
}

export default Topic1Page