import React, { useState } from "react"
import axios from "axios"



const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    track: "",
    teamSize: "",
    experience: "",
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post('https://hackathon-zd7b.onrender.com/api/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert(response.data.message);
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        university: "",
        track: "",
        teamSize: "",
        experience: "",
        terms: false
      });
    } catch (error) {
      console.error('Full error object:', error);
      console.error('Error response:', error.response);
      console.error('Error request:', error.request);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <section id="registration" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4 text-white">Register Now</h2>
          <p className="text-gray-300">Join us for an exciting hackathon experience</p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-800 rounded-xl p-8 shadow-2xl animate__animated animate__fadeInUp">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="firstName">
                    Team Leader First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="lastName">
                    Team Leader Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  College Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="university">
                  College
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Preferred Track</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["AI/ML", "Dev", "Cloud", "Other"].map((track) => (
                    <label
                      key={track}
                      className="flex items-center p-4 bg-neutral-700 rounded-lg cursor-pointer hover:bg-neutral-600 transition-colors"
                    >
                      <input 
                        type="radio" 
                        name="track" 
                        value={track.toLowerCase()} 
                        checked={formData.track === track.toLowerCase()}
                        onChange={handleChange}
                        className="mr-2" 
                      />
                      <span className="text-white">{track}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="teamSize">
                  Team Size
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-green-500 transition-colors"
                >
                  <option value="">Select team size</option>
                  <option value="1">Individual</option>
                  <option value="2">2 Members</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Experience Level</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <label
                      key={level}
                      className="flex items-center p-4 bg-neutral-700 rounded-lg cursor-pointer hover:bg-neutral-600 transition-colors"
                    >
                      <input 
                        type="radio" 
                        name="experience" 
                        value={level.toLowerCase()} 
                        checked={formData.experience === level.toLowerCase()}
                        onChange={handleChange}
                        className="mr-2" 
                      />
                      <span className="text-white">{level}</span>
                    </label>
                  ))}
                </div>
                <div className="pt-2 bg-neutral-800">
                <label 
    className="block text-gray-300 mb-2 text-sm" 
    htmlFor="miraPlatformId"
  >
    MIRA Registration ID
  </label>
  <input
    type="file"
    id="miraPlatformId"
    name="miraPlatformId"
    required
    className="
                  bg-neutral-700
      w-full 
      block 
      text-sm 
      text-gray-300 
      file:mr-4 
      file:py-2 
      file:px-4 
      file:rounded-md 
      file:border-0 
      file:text-sm 
      file:font-semibold 
      file:bg-neutral-700 
      file:text-white 
      hover:file:bg-neutral-600 
      cursor-pointer 
      border 
      border-neutral-600 
      focus:outline-none 
      focus:border-green-500 
      transition-colors
    "
  />
</div>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms" 
                  checked={formData.terms}
                  onChange={handleChange}
                  required 
                  className="mr-2" 
                />
                <label htmlFor="terms" className="text-gray-300">
                  I agree to the{" "}
                  <a href="#" className="text-green-500 hover:text-green-400">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite"
              >
                Register for Hackathon
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Registration Deadline",
              content: "Feburary 05, 2024",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              title: "Team Formation",
              content: "1-2 Members",
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            },
            {
              title: "Registration Fee",
              content: "Free Entry",
              icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg text-center animate__animated animate__fadeInUp animate__delay-1s"
            >
              <svg
                className="w-12 h-12 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Registration

