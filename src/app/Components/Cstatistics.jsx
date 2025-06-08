"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const statsData = [
  { value: 100, label: "Trained Students", bgColor: "bg-green-100" },
  { value: 50, label: "Live Projects", bgColor: "bg-blue-100" },
  { value: 10, label: "Expert Mentors", bgColor: "bg-red-100" },
  { value: 30, label: "Workshops Conducted", bgColor: "bg-yellow-100" },
  { value: 20, label: "Industry Collaborations", bgColor: "bg-purple-100" },
  { value: 50, label: "Successful Projects", bgColor: "bg-indigo-100" },
];

const Statistics = () => {
  const [key, setKey] = useState(0);

  // Restart animation every 4-5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Change key to re-trigger animation
    }, 8000 + Math.random() * 1000); // Interval between 4-5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-14">
      {/* Heading Section */}
      <h2 className="text-4xl font-bold text-gray-800">Our Achievements</h2>
      <p className="text-lg text-gray-600 mt-2">
        Empowering learners with cutting-edge IT training and hands-on projects.
      </p>

      <div className="flex flex-wrap justify-center gap-10 py-14">
        {statsData.map((stat, index) => (
          <div
            key={`${key}-${index}`} // Unique key to force re-render
            className={`p-10 w-80 h-40 rounded-2xl shadow-lg ${stat.bgColor} flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl`}
          >
            <h2 className="text-5xl font-bold text-gray-800">
              <CountUp
                key={key}
                start={0}
                end={stat.value}
                duration={2.5}
                separator=","
              />
              +
            </h2>
            <p className="text-lg text-gray-700 font-semibold mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
