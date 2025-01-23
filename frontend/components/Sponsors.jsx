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
          <div className="grid grid-cols-1  gap-8 max-w-4xl mx-auto animate__animated animate__fadeInUp">
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center border border-gray-200">
              <div className="text-center">
               <Image className="w-30 h-32" src={sponsors} alt="logo"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors

