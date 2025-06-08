"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data } = await axios.get("http://localhost:5000/api/blogs");
        setBlogPosts(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
        alert("Failed to fetch blogs");
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-purple-900 text-white mt-20 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Launch Your Tech Career with Codeware
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
            Industry-focused offline & online courses in programming and web
            development
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/Courses">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-transform transform hover:scale-105 shadow-lg">
                Explore Courses
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
                Book Free Demo
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* Blog Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Latest Course Updates & Articles
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-xl h-48 w-full">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-xl"
                    priority={false}
                  />
                ) : (
                  <div className="bg-gray-200 h-full w-full rounded-t-xl" />
                )}
                <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category || "Article"}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime || "2 min read"}</span>
                </div>

                <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post._id}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-600 mb-4">
                  {post.description?.slice(0, 100)}...
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${post._id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Tech Journey Today!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 5,000+ successful alumni working in top tech companies
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">100+</h3>
                <p className="opacity-90">Students Trained</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="opacity-90">Placement Assistance</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">5 years+</h3>
                <p className="opacity-90">Faculty experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get Course Updates & Career Tips
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and get exclusive content directly in
            your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
