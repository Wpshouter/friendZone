import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h2>
      <p className="text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button 
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-4 py-2 bg-emerald-900 text-white rounded hover:bg-emerald-700 transition cursor-pointer"
      >
        <FaHome className="text-xl" />
        Go Back Home
      </button>
    </div>
  );
}
