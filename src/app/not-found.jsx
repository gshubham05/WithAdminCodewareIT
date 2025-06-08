import React from "react";

function notfound() {
  return (
    <div className="text-center flex items-center justify-center flex-col gap-3 min-h-screen">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
      <p className="mt-4 text-sm text-gray-500">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-6 inline-block text-lg text-blue-500 hover:text-blue-700"
      >
        Go back to the Homepage
      </a>
    </div>
  );
}

export default notfound;
