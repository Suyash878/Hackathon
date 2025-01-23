import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Tracks from "./components/Tracks"
import Schedule from "./components/Schedule"
import Sponsors from "./components/Sponsors"
import Registration from "./components/Registration"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 relative">
        <Hero />
        <About />
        <Tracks />
        <Schedule />
        <Sponsors />
        <Registration />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App

