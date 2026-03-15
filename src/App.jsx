import './App.css'

import Navbar from "./components/Navbar"
import About from "./components/About"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Footer from "./components/Footer"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App