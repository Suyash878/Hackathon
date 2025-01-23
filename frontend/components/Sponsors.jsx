import React from "react"
import sponsors from "../assets/sponsorlogo.png";
import Image from 'next/image';

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">Our Sponsors</h2>
          <p className="text-gray-600">Supported by industry leaders in technology</p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate__animated animate__fadeInUp">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center border border-gray-200">
              <div className="text-center">
               <Image className="w-50" src={sponsors} alt="logo"></Image>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center border border-gray-200">
              <div className="text-center font-bold text-2xl">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">D</span>
                <span className="text-yellow-500">G</span>
                <span className="text-gray-500">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors

