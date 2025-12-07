
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  
  return (
    <div  className="bg-black text-white min-h-screen">
     <Navbar/> 
     <Hero/>
     <Features/>
     <Courses/>
     <Testimonials/>
     <Footer/>

    </div>
  )
}

export default App
