import './globals.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from './components/About'

export default function Home() {
  return (<>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </>
  )
}
