import React, { useState } from "react"

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg animate__animated animate__fadeInUp">
      <button
        className="faq-button w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="faq-answer px-6 py-4 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

const FAQ = () => {
  const faqItems = [
    {
      question: "Who can participate in the hackathon?",
      answer:
        "The hackathon is open to all students. You can participate individually or form a team of up to 2 members.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free! We want to make this event accessible to all students.",
    },
    {
      question: "What technologies can we use?",
      answer:
        "You can use any Google technology relevant to your track. We encourage the use of Google Cloud, Firebase, TensorFlow, Flutter, etc.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">Frequently Asked Questions</h2>
          <p className="text-gray-600">Got questions? We've got answers!</p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300"
          >
            Contact Us
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ

