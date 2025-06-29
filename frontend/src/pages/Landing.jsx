import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#181C23] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-[#232733] shadow">
        <div className="flex items-center gap-2">
          <img src="/wallet.png" alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-amber-400">FIN-TRACE</span>
        </div>
        <nav className="flex gap-6">
          <button
            onClick={() => navigate('/signin')}
            className="px-5 py-2 rounded bg-transparent border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#232733] transition"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-5 py-2 rounded bg-amber-400 text-[#232733] font-semibold hover:bg-amber-500 transition"
          >
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-16">
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 mb-6 leading-tight">
            All Your Payments, <span className="text-white">One Dashboard</span>
          </h1>
          <p className="text-lg text-[#A3AED0] mb-8">
            From payment transactions to splitting bills with friends, track your entire payment stack in one secure, beautiful place.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-3 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="px-8 py-3 rounded border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#232733] transition"
            >
              Demo Login
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <img src="/wallet.png" alt="Wallet dashboard" className="w-96 rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#232733] py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-Time Tracking</h3>
            <p className="text-[#A3AED0]">Monitor your balances, expenses, and savings instantly with live updates.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-amber-400 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-[#232733]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
            <p className="text-[#A3AED0]">Your data is encrypted and protected. Only you have access to your wallet.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 014-4h4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Easy Bill Splitting</h3>
            <p className="text-[#A3AED0]">Split payments with friends and track who owes what, all in one place.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <footer className="bg-[#181C23] py-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-2">Ready to take control of your finances?</h2>
        <button
          onClick={() => navigate('/signup')}
          className="px-8 py-3 rounded bg-amber-400 text-[#232733] font-semibold hover:bg-amber-500 transition"
        >
          Create Your Free Account
        </button>
        <p className="text-[#A3AED0] mt-4">© {new Date().getFullYear()} WALLET-PAY. All rights reserved.</p>
      </footer>
    </div>
  );
};
