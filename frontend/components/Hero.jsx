import React from "react"

const Hero = () => {
  return (
    <section id="hero" className="min-h-[70vh] bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #4CAF50 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 animate__animated animate__fadeInDown">
          GDG On Campus
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-red-500 text-transparent bg-clip-text">
            Hackathon
          </span>
          2025
        </h1>

        <p className="text-2xl font-bold md:text-2xl text-gray-300 text-center max-w-3xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          Imagine AI : Build with AI
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-2s">
          <a
            href="#registration"
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full text-lg transition-all transform hover:scale-105"
          >
            Register Now
          </a>
          <a
            href="#tracks"
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-semibold rounded-full text-lg transition-all transform hover:scale-105"
          >
            View Tracks
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl animate__animated animate__fadeInUp animate__delay-3s">
          <div className="text-center">
            <h3 className="text-green-400 font-bold text-xl mb-2">Registration Opens</h3>
            <p className="text-white">January 25, 2025</p>
          </div>
          <div className="text-center">
            <h3 className="text-blue-400 font-bold text-xl mb-2">Idea Submission</h3>
            <p className="text-white">Feburary 10, 2025</p>
          </div>
          <div className="text-center">
            <h3 className="text-red-400 font-bold text-xl mb-2">Prototype Submission</h3>
            <p className="text-white">Feburary 20, 2025</p>
          </div>
          <div className="text-center">
            <h3 className="text-yellow-400 font-bold text-xl mb-2">Results</h3>
            <p className="text-white">March 20, 2025</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Hero

