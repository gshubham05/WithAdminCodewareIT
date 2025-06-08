"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // clear previous errors

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      console.log(res.data);
      if (res.data.success) {
        localStorage.setItem("admin-auth", res.data.token);
        router.push("/admin/dashboard"); // navigate only if success
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200">
      <form
        onSubmit={handleLogin}
        className="backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl p-8 rounded-2xl w-full max-w-sm transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-sm text-center">{error}</p>
        )}

        <input
          type="text"
          placeholder="Username"
          autoComplete="username"
          className="w-full mb-4 p-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600 text-gray-800"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="w-full mb-6 p-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600 text-gray-800"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 rounded-lg hover:scale-[1.02] transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}
