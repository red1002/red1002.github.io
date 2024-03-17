import './App.css'
import Header from "./componets/header.jsx"
import Hero from "./componets/hero.jsx"
import Proyects from "./componets/proyects.jsx"
import Skills from "./componets/skills.jsx"

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Hero/>
        <Proyects/>
        <Skills/>
      </main>
    </>
  )
}

export default App
