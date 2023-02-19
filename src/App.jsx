import Navbar from './components/Navbar';
import Bot from './components/Bot';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blogs from './components/Blogs';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Bot/>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/> 
      <Footer/> 
    </div>
  )
}

export default App