import type React from "react"

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">About The Event</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          <p className="text-xl text-center font-bold mt-2">
            Welcome to Imagine AI! Hosted by GDG IIIT Manipur, Imagine AI is a two-phase hackathon that challenges you
            to pitch bold ideas and transform them into impactful prototypes using the cutting-edge MIRA platform.
            Whether you're a pro or a newbie, this is your chance to explore the exciting world of AI and innovation!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate__animated animate__fadeInLeft">
            <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">What is GDG Campus Hackathon?</h3>
              <p className="text-neutral-700">
                A coding challenge where students collaborate, innovate, and build solutions for real-world problems
                using Google technologies.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Why Participate?</h3>
              <ul className="text-neutral-700 list-disc list-inside space-y-2">
                <li>Win exciting prizes and goodies</li>
                <li>Get exclusive Google swag</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Who Can Participate?</h3>
              <p className="text-neutral-700">
                Open to all university students passionate about technology and problem-solving. Form teams of 2-4
                members.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate__animated animate__fadeInRight">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-neutral-700">Participants</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-neutral-700">Projects</div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Event Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Technical Workshops</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Development Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Networking Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

