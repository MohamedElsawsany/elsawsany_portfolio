import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './Components/Hero';
import Bio from './Components/Bio';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Contact from './Components/Contact';
import WorkExperience from './Components/WorkExperience';

function App() {


  return (
    <>
      <Hero />
      <Bio />
      <WorkExperience />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}

export default App
