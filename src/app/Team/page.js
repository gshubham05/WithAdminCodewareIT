import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// Team member data with enhanced leadership descriptions for Shubham and Akash
const team = [
  {
    name: "Shubham Goyal",
    image: "/user.jpg", // Add image URL here
    role: "Co-Founder",
    description:
      "As a Co-Founder and key leader at Codeware IT, Shubham is responsible for setting the overall direction and vision of the company. He leads the technical team with a strong focus on creating scalable, high-performance web applications. Shubham combines his expertise in both front-end and back-end development to ensure the company’s technology is innovative, sustainable, and aligns with business goals. His leadership drives the development of cutting-edge solutions, while fostering an environment of collaboration and growth.",
  },
  {
    name: "Akash Choudhary",
    role: "Co-Founder",
    image: "/user.jpg", // Add image URL here
    description:
      "As a Co-Founder and a strategic leader, Akash is in charge of overseeing the backend infrastructure and ensuring its efficiency, security, and scalability. With his deep understanding of server-side technologies, he provides clear guidance to the development team on building a robust foundation for the company's web applications. Akash's role goes beyond just technical execution—he actively drives the company's vision by ensuring seamless integration of all systems, ultimately supporting the company’s overall success and growth.",
  },

  // Technical Team members
  {
    name: "Deepak Chauhan",
    image: "/user.jpg", // Add image URL here
    role: "Mern Stack Developer",
    description:
      "A Mern Stack Developer, Deepak specializes in creating dynamic web applications with a seamless user experience. He excels in using MongoDB, Express, React, and Node.js to build both the client and server sides of web applications. Deepak ensures the integration of modern front-end technologies to craft visually appealing, fast-loading, and responsive designs.",
  },
  {
    name: "Meenu Pal",
    image: "/girl.jpg", // Add image URL here
    role: "SEO Specialist",
    description:
      "As an SEO Specialist, Meenu plays a key role in optimizing the website’s visibility on search engines. She develops and implements strategies to improve search rankings and drive organic traffic. With a deep understanding of SEO best practices, she ensures the website’s content is optimized for performance, user engagement, and search engine algorithms.",
  },
  {
    name: "Riya Sainwal",
    image: "/girl.jpg", // Add image URL here
    role: "Frontend Developer",
    description:
      "As a Frontend Developer, Riya focuses on building visually engaging, responsive web pages that deliver an exceptional user experience. She is skilled in HTML, CSS, and JavaScript, ensuring that the web applications are optimized for performance across all devices. Riya’s attention to detail and creativity help deliver interactive and modern user interfaces.",
  },
  {
    name: "Mandeep Singh",
    image: "/user.jpg", // Add image URL here
    role: "Backend Developer",
    description:
      "Mandeep works as a Backend Developer, focusing on writing clean, efficient code to power the server-side logic of web applications. He is responsible for building and maintaining robust server-side infrastructure, ensuring the system is secure, scalable, and can handle high volumes of traffic. Mandeep works closely with the front-end team to ensure smooth data flow and a seamless experience for the users.",
  },
  {
    name: "Vikas Kandari",
    role: "Graphic Designer",
    image: "/user.jpg", // Add image URL here
    description:
      "Vikas works as a Graphic Designer, responsible for creating visually appealing graphics, layouts, and branding materials for the company. He designs intuitive and attractive user interfaces, while also focusing on ensuring that the visuals align with the company’s brand identity. Vikas brings a creative touch to web designs, making them not only functional but also aesthetically pleasing.",
  },
];

const TeamSection = () => {
  const leadershipTeam = team.filter((member) => member.role === "Co-Founder");
  const technicalTeam = team.filter((member) => member.role !== "Co-Founder");

  return (
    <div>
      {/* Heading section */}
      <div className="relative w-full h-[280px] sm:h-[320px] bg-gradient-to-r from-blue-800 to-purple-900 flex items-center justify-center text-white text-center px-4 mt-[5rem]">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Meet the Codeware IT Team
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            Our expert team is here to guide you through your learning journey.
          </p>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-16 py-8 gap-8">
          {leadershipTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white border-2 flex gap-4 shadow-lg rounded-2xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Member Image */}
              <div className="mx-auto mb-2 rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={600}
                  className="object-cover rounded-full"
                />
              </div>

              <div className="gap-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>

                {/* Member Description - Hidden on mobile */}
                <p className="text-gray-500 mt-2 text-sm hidden sm:block">
                  {member.description}
                </p>

                {/* Social Media Icons */}
                <div className="mt-4 flex justify-center space-x-4 text-gray-600">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-blue-600"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-pink-500"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-blue-700"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Team */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
          Technical Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-16 py-8 gap-8">
          {technicalTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white border-2 flex gap-4 shadow-lg rounded-2xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Member Image */}
              <div className="mx-auto mb-2 rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={600}
                  className="object-cover rounded-full"
                />
              </div>

              <div className="gap-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>

                {/* Member Description - Hidden on mobile */}
                <p className="text-gray-500 mt-2 text-sm hidden sm:block">
                  {member.description}
                </p>

                {/* Social Media Icons */}
                <div className="mt-4 flex justify-center space-x-4 text-gray-600">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-blue-600"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-pink-500"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-blue-700"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
