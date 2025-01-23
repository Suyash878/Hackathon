import type React from "react"

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">How it Works</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-200"></div>

          <div className="mb-16 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 bg-white inline-block px-4">Phase - 1</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__animated animate__fadeInLeft">
              <div className="md:text-right">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-neutral-900">25 Jan - 05 Feb : Registration </h4>
                  <p className="text-gray-600 mt-2">Register yourself</p>
                </div>
              </div>
              <div className="md:text-left">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-600 mt-2 text-center text-l">Register yourself to become part of image AI.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 bg-white inline-block px-4">Phase - 2</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__animated animate__fadeInLeft">
              <div className="md:text-right">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-neutral-900">10 Feb - 15 Feb : Idea Submission </h4>
                  <p className="text-gray-600 mt-2">Pitch Your Idea</p>
                </div>
              </div>
              <div className="md:text-left">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-600 mt-2 text-center text-l">
                    Present your creative AI-powered idea that solves real-world problems. Highlight how you will
                    integrate AI into your solution. A panel of experts will evaluate your pitch on creativity,
                    feasibility and impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 bg-white inline-block px-4">Phase - 3</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__animated animate__fadeInRight">
              <div className="md:text-right">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-lg font-semibold text-neutral-900">20 Feb - 27 Feb : Prototype Submission </h4>
                  <p className="text-gray-600 mt-2">Build your prototype</p>
                </div>
              </div>
              <div className="md:text-left">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-600 mt-2">
                    If your idea is selected: Create a Website, Mobile App, or AI Model as your prototype.
                  </p>
                  <h4 className="text-red-400 text-xl">Mandatory Requirements:</h4>
                  <p className="text-gray-600">
                    Use the MIRA platform for your development. Integrate at least one AI API call or implement an SDK
                    model provided by MIRA. Ensure AI is central to your solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-lg">
            <h4 className="text-xl font-bold">Final Result Declaration 1st March</h4>
            <p className="text-gray-300">Winners announcement and prize distribution</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule

