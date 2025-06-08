"use client";
import { useState } from "react";
import axios from "axios"; // install axios if not installed: npm i axios
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

export default function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for success message
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      // Post form data to your backend API route
      await axios.post("http://localhost:5000/api/students", formData);

      setSuccessMsg("Message sent successfully!");
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden mt-[1rem] border-b-2 ">
      {/* Full-Screen Background with Wave Design */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#2563EB"
            fillOpacity="1"
            d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Main Section (Now Full Width) */}
      <div
        className={`relative w-full min-h-screen flex items-center justify-center bg-blue-900 text-white transition-all duration-700 ${
          isOpen ? "h-auto py-12 px-10" : "cursor-pointer"
        }`}
        onClick={() => setIsOpen(true)}
      >
        {!isOpen ? (
          // Before Click (Covers Full Width)
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
            {/* Floating Circles */}
            <div className="absolute top-[-12rem] sm:top-[-5rem] left-6 w-20 h-20 bg-white opacity-30 rounded-full animate-bounce"></div>
            <div className="absolute  bottom-[-14rem] sm:bottom-[-5rem] right-6 w-24 h-24 bg-white opacity-20 rounded-full animate-ping"></div>
            <div className="absolute bottom-[-7.5rem] sm:bottom-[-3rem] left-20 w-16 h-16 bg-white opacity-25 rounded-full animate-pulse"></div>

            <h2 className="text-3xl font-extrabold relative z-10 leading-tight sm:text-6xl">
              Let's Build Your Future <br /> with{" "}
              <span className="text-purple-300 underline">Codeware IT</span>
            </h2>
            <p className="mt-4 text-gray-200 relative z-10 text-sm sm:text-xl max-w-2xl">
              We provide{" "}
              <span className="text-purple-300 font-semibold">
                cutting-edge training
              </span>{" "}
              in MERN Stack, Full Stack Development, Python, Java. Join us to
              gain industry-level skills and shape your career in the tech
              world.
            </p>

            <p className="mt-6 text-purple-300 text-lg font-semibold relative z-10">
              👉 Click Anywhere to Connect with Us!
            </p>
          </div>
        ) : (
          // Contact Form Content (Full Width & Beautiful Layout)
          <div className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left Side - Company Info */}
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-4 text-purple-300">
                  Codeware IT Pvt Ltd
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  We provide professional training in{" "}
                  <span className="text-purple-300 font-semibold">
                    Full Stack Development, MERN Stack, Python, Java.
                  </span>
                  Our expert-led courses help students and professionals{" "}
                  <span className="text-purple-300">
                    become job-ready and industry experts.
                  </span>
                </p>
                <ul className="mt-6 space-y-4 text-gray-100">
                  <li className="flex items-center text-lg">
                    <FaBuilding className="mr-3 text-purple-300" /> Codeware IT
                    Pvt Ltd
                  </li>
                  <li className="flex items-center text-lg">
                    <FaMapMarkerAlt className="mr-3 text-purple-300" />
                    Karanpur, Dehradun, Uttarakhand 248001
                  </li>
                  <li className="flex items-center text-lg">
                    <FaEnvelope className="mr-3 text-purple-300" />
                    info@codewareit.com
                  </li>
                  <li className="flex items-center text-lg">
                    <FaPhone className="mr-3 text-purple-300" /> +91 9837218345
                  </li>
                </ul>
              </div>

              {/* Right Side - Contact Form */}
              <div className="md:w-1/2 bg-white text-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 backdrop-blur-lg order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-5 text-blue-900">
                  Send Us a Message
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="flex items-center border rounded-lg px-4 py-3 transition-all duration-300 focus-within:border-blue-500">
                    <FaUser className="text-gray-500 mr-3" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full outline-none bg-transparent text-lg"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-center border rounded-lg px-4 py-3 transition-all duration-300 focus-within:border-blue-500">
                    <FaEnvelope className="text-gray-500 mr-3" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full outline-none bg-transparent text-lg"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-center border rounded-lg px-4 py-3 transition-all duration-300 focus-within:border-blue-500">
                    <FaPhone className="text-gray-500 mr-3" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      className="w-full outline-none bg-transparent text-lg"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full border rounded-lg px-4 py-3 h-32 outline-none transition-all duration-300 focus:border-blue-500 text-lg"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <button
                    className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition text-lg shadow-md"
                    type="submit"
                  >
                    Send Message
                  </button>

                  {successMsg && (
                    <p className="text-green-600 font-semibold mt-3">
                      {successMsg}
                    </p>
                  )}
                  {errorMsg && (
                    <p className="text-red-600 font-semibold mt-3">
                      {errorMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
