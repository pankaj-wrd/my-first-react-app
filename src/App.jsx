import Topic1Page from "./topics/topics1-jsx/Topic1Page"
import Topic2Page from "./topics/topics2-props/Topic2Page"
import Topic3Page from "./topics/topic3-state/Topic3Page"

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>My React Learning</h1>
      <Topic1Page />
      <Topic2Page />
      <Topic3Page />
    </>
  )
}

export default App