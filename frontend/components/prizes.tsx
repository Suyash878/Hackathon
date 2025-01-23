import React from 'react';
import { Star, Award, Trophy } from 'lucide-react';

const HackathonLanding: React.FC = () => {
  return (
    <div>
      {/* Prizes Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-4xl font-bold mb-4 text-white">Prizes & Rewards</h2>
            <p className="text-gray-300">Compete for exciting prizes worth over ₹10,000</p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>

          {/* Prize Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Second Prize */}
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInLeft animate__delay-1s">
              <div className="relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <Star className="w-12 h-12 text-blue-500" />
                </div>
                <div className="bg-neutral-800 rounded-xl p-8 pt-12 border-2 border-blue-500">
                  <h3 className="text-2xl font-bold text-blue-500 mb-2">2nd Prize</h3>
                  <div className="text-3xl font-bold text-white mb-4">₹2000</div>
                  <ul className="text-gray-300 space-y-2">
                    <li>Swag Pack</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* First Prize */}
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp">
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <Award className="w-16 h-16 text-green-500" />
                </div>
                <div className="bg-neutral-800 rounded-xl p-8 pt-14 border-2 border-green-500 transform scale-110">
                  <h3 className="text-2xl font-bold text-green-500 mb-2">1st Prize</h3>
                  <div className="text-4xl font-bold text-white mb-4">₹5000</div>
                  <ul className="text-gray-300 space-y-2">
                    <li>Premium Swag Pack</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Prize */}
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInRight animate__delay-1s">
              <div className="relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <Trophy className="w-12 h-12 text-red-500" />
                </div>
                <div className="bg-neutral-800 rounded-xl p-8 pt-12 border-2 border-red-500">
                  <h3 className="text-2xl font-bold text-red-500 mb-2">3rd Prize</h3>
                  <div className="text-3xl font-bold text-white mb-4">₹1000</div>
                  <ul className="text-gray-300 space-y-2">
                    <li>Swag Pack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Perks */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Special Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate__animated animate__fadeIn">
              <div className="bg-neutral-800 p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Top Idea</h4>
                <p className="text-green-500 font-bold">Swags</p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Top Design</h4>
                <p className="text-blue-500 font-bold">Swags</p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Top AI Model</h4>
                <p className="text-red-500 font-bold">Swags</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Rules Section */}
      <section className="bg-[#121212] py-20 text-white text-center">
        <h1 className="text-4xl text-blue-500 mb-10 font-bold">Hackathon Rules</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-[#1e1e1e] border border-blue-500 rounded-lg p-6">
            <h2 className="text-2xl text-blue-500 mb-4">Team Formation</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Team size: 1-2 members
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Cross-college teams allowed
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>All members must register
              </li>
            </ul>
          </div>
          <div className="bg-[#1e1e1e] border border-blue-500 rounded-lg p-6">
            <h2 className="text-2xl text-blue-500 mb-4">Code of Conduct</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Original work only
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Respect for all participants
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Ethical AI principles
              </li>
            </ul>
          </div>
          <div className="bg-[#1e1e1e] border border-blue-500 rounded-lg p-6">
            <h2 className="text-2xl text-blue-500 mb-4">Technical Requirements</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Use Mira API/SDK
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Incorporate AI technologies
              </li>
            </ul>
          </div>
          <div className="bg-[#1e1e1e] border border-blue-500 rounded-lg p-6">
            <h2 className="text-2xl text-blue-500 mb-4">Submission Guidelines</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Submit before deadline
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Include documentation
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>Present working prototype
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonLanding;