import './App.css'
import Counter from './useState'
import NoDependency from './NoDependency'
import EmptyDependency from './EmptyDependencyArray'

function App() {

  return (
    <>
      {/* <Counter initialCount={5}/> */}
      {/* <NoDependency/> */}
      <EmptyDependency/>
    </>
  )
}

export default App