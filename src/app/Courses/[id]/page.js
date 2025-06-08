import { notFound } from "next/navigation";
import Image from "next/image";
import courses from "../data";
import { Bookmark, Calendar, GraduationCap, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function CourseDetails({ params }) {
  const { id } = await params; // Ensure params is awaited properly
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) return notFound();

  return (
    <div className="h-full w-full mt-[4.5rem]">
      <div className="max-w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/Courses"
            className="flex items-center text-blue-500 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
          </Link>
        </div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={300}
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover border border-gray-300"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
              {course.title}
            </h1>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              {course.description}
            </p>
            <div className="mt-4 flex items-center space-x-3">
              <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm flex items-center shadow-sm">
                <GraduationCap className="w-4 h-4 mr-2" /> {course.type}
              </span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm flex items-center shadow-sm">
                <Calendar className="w-4 h-4 mr-2" /> 3-6 months
              </span>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            {course.overview}
          </p>
        </div>

        {/* Syllabus Section */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Syllabus</h2>
          <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
            {course.syllabus.map((topic, index) => (
              <li
                key={index}
                className="hover:text-blue-500 transition duration-200"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Course Details Section */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">
            Course Details
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed">{course.details}</p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex justify-center">
          <a
            href={`https://wa.me/9837218345?text=I'm%20interested%20in%20the%20${encodeURIComponent(
              course.title
            )}%20course`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg flex items-center transform hover:scale-105 transition duration-200"
          >
            <Bookmark className="w-5 h-5 mr-2" /> Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id.toString() }));
}
