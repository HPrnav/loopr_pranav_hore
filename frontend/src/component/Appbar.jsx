import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import React, { useState } from "react";

export const Appbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="h-16 flex justify-between items-center px-4 sm:px-8 bg-[#232733] shadow-lg border-b border-[#232733] relative">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <span className="text-xl sm:text-2xl font-bold text-amber-400 font-mono tracking-wide">
          FIN-TRACE
        </span>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </button>

      {/* Navigation */}
      <div className={`flex-col sm:flex-row gap-4 items-center absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#232733] sm:bg-transparent z-50 sm:flex transition-all duration-200 ${menuOpen ? "flex" : "hidden sm:flex"}`}>
        <button
          onClick={() => { setMenuOpen(false); navigate("/transactions"); }}
          className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full sm:w-auto"
        >
          Transactions
        </button>
        <button
          onClick={() => { setMenuOpen(false); navigate("/Dash"); }}
          className="px-4 py-2 rounded bg-amber-400 text-[#232733] font-semibold hover:bg-amber-500 transition w-full sm:w-auto"
        >
          Analytics
        </button>
        <button
          onClick={() => { setMenuOpen(false); handleLogout(); }}
          className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition w-full sm:w-auto"
        >
          Logout
        </button>
        {/* User avatar or initials */}
        <div className="rounded-full h-12 w-12 bg-[#181C23] flex items-center justify-center ml-0 sm:ml-2 border border-[#353B48] mt-2 sm:mt-0 self-center">
          <span className="text-lg text-white font-bold">
            {localStorage.getItem("username")
              ? localStorage.getItem("username")[0]?.toUpperCase()
              : "U"}
          </span>
        </div>
      </div>
    </div>
  );
};