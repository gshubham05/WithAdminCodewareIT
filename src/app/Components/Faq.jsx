"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer training in Full Stack Development, MERN Stack, Python, Java, and various other programming languages.",
  },
  {
    question: "How long do the training programs last?",
    answer:
      "The duration varies by course. Our full-time Full Stack and MERN Stack programs typically last 3-6 months.",
  },
  {
    question: "Do you provide certifications?",
    answer:
      "Yes! Upon successful completion of any training program, we provide industry-recognized certification.",
  },
  {
    question: "Is prior coding experience required?",
    answer:
      "Not at all! We have beginner-friendly courses as well as advanced training programs.",
  },
  {
    question: "What support do you provide after course completion?",
    answer:
      "We offer career guidance, resume-building assistance, and interview preparation to help you land a job in tech.",
  },
  {
    question: "Do you offer online or offline training?",
    answer:
      "We provide both online and offline training options to suit different schedules and learning styles.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Ensures only one is open at a time
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Find answers to common questions about our training programs at
          Codeware IT Pvt Ltd.
        </p>
      </div>

      {/* 2 FAQs per row using Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-md"
          >
            <button
              className="w-full flex justify-between items-center p-5 bg-blue-50 hover:bg-blue-100 text-left text-lg font-medium transition-all rounded-xl"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-blue-600" />
              ) : (
                <FaPlus className="text-blue-600" />
              )}
            </button>

            {/* Conditionally render the answer without affecting layout */}
            {openIndex === index && (
              <div className="p-5 bg-white text-gray-700 border-t border-gray-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
