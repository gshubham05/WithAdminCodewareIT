"use client";

import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = ["IT Skills", "Tech Career", "Future"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
      }, 150);
    }

    if (!isDeleting && displayText === currentWord) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="animate-fadeInLeft">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Elevate Your{" "}
            <span className="text-blue-600">
              <br></br>
              {displayText}
            </span>
            <br></br>with Codeware IT
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Codeware IT Pvt Ltd empowers aspiring developers with top-notch
            training in Full Stack Development, Python, Java, and cutting-edge
            technologies. Kickstart your tech career with us!
          </p>
          <a
            href="#how-it-works"
            className="mt-6 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            See How it Works <FaArrowRight className="ml-2" />
          </a>
        </div>

        {/* Right Content - Animated Cards Section */}
        <div className="relative flex flex-col items-center gap-6">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl p-6 rounded-lg w-96 text-center transform hover:scale-105 transition-transform animate-fadeInUp delay-200">
            <h3 className="font-bold text-white text-xl">
              Transform Your Career
            </h3>
            <p className="text-white mt-2">
              Join our community and gain industry-relevant skills.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-xl p-6 rounded-lg w-96 text-center transform hover:scale-105 transition-transform animate-fadeInUp delay-400">
            <h3 className="font-bold text-white text-xl">
              Expert-Led Training
            </h3>
            <p className="text-white mt-2">
              Learn from industry professionals with hands-on experience.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-400 to-pink-500 shadow-xl p-6 rounded-lg w-96 text-center transform hover:scale-105 transition-transform animate-fadeInUp delay-600">
            <h3 className="font-bold text-white text-xl">Job-Ready Programs</h3>
            <p className="text-white mt-2">
              Get certified and step into your dream IT career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
