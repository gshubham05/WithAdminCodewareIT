import React from "react";
import Link from "next/link";

const courses = [
  {
    name: "MERN Stack",
    icon: "🔥",
    description:
      "Master MongoDB, Express.js, React, and Node.js to become a full-stack developer.",
    link: "Courses/mern-stack-development",
  },
  {
    name: "Full Stack",
    icon: "💻",
    description:
      "Comprehensive training in front-end and back-end technologies for full-stack development.",
    link: "Courses/full-stack-development",
  },
  {
    name: "Programming Language",
    icon: "👨‍💻",
    description:
      "Learn essential programming languages like Python, Java, C++, and more.",
    link: "Courses/programming-languages",
  },
  {
    name: "Industrial Training",
    icon: "🏭",
    description:
      "Hands-on industry experience with real-world projects and mentorship.",
    link: "Courses/industrial-training",
  },
  {
    name: "Graphic Design",
    icon: "🎨",
    description:
      "Enhance your creativity with Photoshop, Illustrator, and other design tools.",
    link: "Courses/graphic-design",
  },
  {
    name: "SEO & Digital Marketing",
    icon: "📈",
    description:
      "Optimize web presence and master digital marketing strategies.",
    link: "Courses/seo-digital-marketing",
  },
];

const CoursesSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800">
        Codeware IT Pvt Ltd Training Solutions
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        We provide high-quality training and certification in various tech
        fields. Upgrade your skills with Codeware IT Pvt Ltd.
      </p>

      {/* Courses Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border-2  shadow-lg rounded-2xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-4xl">{course.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">
              {course.name}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{course.description}</p>
            <a
              href={course.link}
              className="text-blue-600 font-semibold mt-4 inline-block"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* Visit All Button */}
      <Link href="/Courses">
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Visit All
        </button>
      </Link>
    </div>
  );
};

export default CoursesSection;
