import Counter from "./Counter"
import NameChanger from "./NameChanger"
import ToggleText from "./ToggleText"

function Topic3Page() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px", borderTop: "2px solid gray", paddingTop: "30px" }}>
        Topic 3: State (useState)
      </h2>
      <Counter />
      <NameChanger />
      <ToggleText />
    </>
  )
}

export default Topic3Page