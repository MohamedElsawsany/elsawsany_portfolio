import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './Components/Hero';
import Bio from './Components/Bio';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Contact from './Components/Contact';

function App() {


  return (
    <>
      <Hero />
      <Bio />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}

export default App
