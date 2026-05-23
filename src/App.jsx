import Topic1Page from "./topics/topics1-jsx/Topic1Page"
import Topic2Page from "./topics/topics2-props/Topic2Page"

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>My React Learning</h1>
      <Topic1Page />
      <Topic2Page />
    </>
  )
}

export default App