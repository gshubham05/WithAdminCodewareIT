"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "", // this will hold Cloudinary URL
    date: "",
    readTime: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [activeTab, setActiveTab] = useState("blogs");
  const [imageFile, setImageFile] = useState(null); // local image file state
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin-auth");
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
      fetchBlogs();
      fetchStudents();
    }
  }, [router]);

  async function fetchBlogs() {
    try {
      const { data } = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
      alert("Failed to fetch blogs");
    }
  }

  async function fetchStudents() {
    try {
      const token = localStorage.getItem("admin-auth");
      const { data } = await axios.get("http://localhost:5000/api/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(data);
    } catch (error) {
      console.error(
        "Error fetching students:",
        error.response?.data || error.message
      );
      alert("Failed to fetch students");
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // handle image file select
  function handleImageChange(e) {
    const file = e.target.files[0];
    setImageFile(file);
  }

  // upload image file to backend -> cloudinary and get URL
  async function uploadImageToBackend() {
    const token = localStorage.getItem("admin-auth");
    if (!imageFile) return "";
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await axios.post(
        "http://localhost:5000/api/blogs",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadingImage(false);
      return res.data.imageUrl; // assuming backend responds with { imageUrl }
    } catch (error) {
      setUploadingImage(false);
      alert("Image upload failed");
      console.error("Image upload error:", error);
      return "";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("admin-auth");

      // Prepare formData with all blog fields + image file
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("content", form.content);
      formData.append("date", form.date);
      formData.append("readTime", form.readTime);
      formData.append("category", form.category);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          // Don't set Content-Type here; axios will set multipart/form-data automatically
        },
      };

      if (editId) {
        await axios.put(
          `http://localhost:5000/api/blogs/${editId}`,
          formData,
          config
        );
        alert("Blog updated");
      } else {
        await axios.post("http://localhost:5000/api/blogs", formData, config);
        alert("Blog added");
      }

      // Reset form
      setForm({
        title: "",
        description: "",
        content: "",
        image: "",
        date: "",
        readTime: "",
        category: "",
      });
      setImageFile(null);
      setEditId(null);
      fetchBlogs();
    } catch (error) {
      console.error("Failed to save blog", error);
      alert("Failed to save blog");
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(blog) {
    setForm(blog);
    setEditId(blog._id || blog.id);
    setActiveTab("blogs");
    setImageFile(null); // reset local file, use existing image url in form.image
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure?")) return;
    try {
      const token = localStorage.getItem("admin-auth");
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBlogs();
    } catch (error) {
      console.error("Delete failed", error);
      alert("Delete failed");
    }
  }

  function handleLogout() {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-indigo-50">
        <p className="text-indigo-700 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-800 mt-[5rem]">
      <aside className="w-64 bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 text-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-indigo-600 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold tracking-wide">Codeware</h1>
          <p className="text-indigo-300 mt-2 text-sm">Admin Panel</p>
        </div>
        <nav className="flex flex-col p-6 space-y-3 flex-grow">
          <button
            onClick={() => setActiveTab("blogs")}
            className={`rounded-lg px-5 py-3 text-lg font-semibold transition-all duration-300 ${
              activeTab === "blogs"
                ? "bg-indigo-500 shadow-lg"
                : "hover:bg-indigo-600/70"
            }`}
          >
            Manage Blogs
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`rounded-lg px-5 py-3 text-lg font-semibold transition-all duration-300 ${
              activeTab === "students"
                ? "bg-indigo-500 shadow-lg"
                : "hover:bg-indigo-600/70"
            }`}
          >
            Student Details
          </button>
          <button
            onClick={handleLogout}
            className="mt-auto bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg font-semibold"
          >
            Logout
          </button>
        </nav>
        <div className="p-6 border-t border-indigo-600 text-indigo-300 text-center text-sm">
          &copy; 2025 Codeware
        </div>
      </aside>

      <main className="flex-grow p-10 overflow-auto">
        {activeTab === "blogs" && (
          <>
            <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-14">
              <h2 className="text-3xl font-extrabold mb-6 text-indigo-700">
                {editId ? "Edit Blog" : "Add New Blog"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {["title", "description", "date", "readTime", "category"].map(
                  (field) => (
                    <input
                      key={field}
                      name={field}
                      placeholder={field[0].toUpperCase() + field.slice(1)}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  )
                )}

                <textarea
                  name="content"
                  placeholder="Content"
                  value={form.content}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-indigo-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {/* Image input */}
                <div>
                  <label className="block mb-1 font-semibold">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full"
                  />
                  {uploadingImage && (
                    <p className="text-indigo-600 mt-1">Uploading image...</p>
                  )}
                  {/* Preview current or uploaded image */}
                  {(imageFile || form.image) && (
                    <img
                      src={
                        imageFile ? URL.createObjectURL(imageFile) : form.image
                      }
                      alt="Selected"
                      className="mt-3 max-h-40 rounded-lg object-contain"
                    />
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading || uploadingImage}
                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
                  >
                    {loading
                      ? editId
                        ? "Updating..."
                        : "Saving..."
                      : editId
                      ? "Update Blog"
                      : "Add Blog"}
                  </button>
                  {editId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditId(null);
                        setForm({
                          title: "",
                          description: "",
                          content: "",
                          image: "",
                          date: "",
                          readTime: "",
                          category: "",
                        });
                        setImageFile(null);
                      }}
                      className="px-8 py-3 rounded-lg border border-indigo-400 hover:bg-indigo-100 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </section>

            <section className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-extrabold mb-6 text-indigo-700">
                Blogs
              </h2>
              <div className="space-y-5">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-indigo-800">
                        {blog.title}
                      </h3>
                      <p className="text-indigo-600">{blog.description}</p>
                      {blog.image && (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="mt-2 max-h-28 rounded-md object-cover"
                        />
                      )}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="px-5 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500 text-indigo-900 font-semibold transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === "students" && (
          <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 overflow-auto max-h-[70vh]">
            <h2 className="text-3xl font-extrabold mb-6 text-indigo-700">
              Student Details
            </h2>
            <table className="w-full table-auto border-collapse text-left text-gray-800">
              <thead>
                <tr>
                  <th className="border-b border-gray-300 p-3 font-semibold">
                    Name
                  </th>
                  <th className="border-b border-gray-300 p-3 font-semibold">
                    Email
                  </th>
                  <th className="border-b border-gray-300 p-3 font-semibold">
                    Phone
                  </th>
                  <th className="border-b border-gray-300 p-3 font-semibold">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center p-5 text-indigo-600 font-semibold"
                    >
                      No student data found.
                    </td>
                  </tr>
                ) : (
                  students.map((student, i) => (
                    <tr
                      key={student._id || i}
                      className={`${
                        i % 2 === 0 ? "bg-indigo-50" : "bg-indigo-100"
                      }`}
                    >
                      <td className="border-b border-gray-300 p-3">
                        {student.name}
                      </td>
                      <td className="border-b border-gray-300 p-3">
                        {student.email}
                      </td>
                      <td className="border-b border-gray-300 p-3">
                        {student.phone}
                      </td>
                      <td className="border-b border-gray-300 p-3">
                        {student.message}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
}
