import './App.css'
import { About } from './Components/About'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Resume from './Components/Resume'

function App() {

  return (
    <>
      <div className='App'>
          <Header/>
          <Hero/>
          <About/>
          <Projects/>
          <Resume/>
          <Contact/>
      </div>
      
    </>
  )
}

export default App
