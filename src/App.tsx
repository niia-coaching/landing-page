import Header from "./components/Header"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import Services from "./components/Services"
import About from "./components/About"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Urgency from "./components/Urgency"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <About />
      <Stats />
      <Testimonials />
        <FAQ />
        <Urgency />
        <FinalCTA />
        <Footer />
    </div>
  )
}

export default App
