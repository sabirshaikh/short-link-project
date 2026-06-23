import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
      {/* Header */}
      <header className="bg-black bg-opacity-20 backdrop-blur-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white">LinkShort</h1>
            <p className="text-sm text-gray-200">Make your URLs shorter</p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center">
            <ul className="flex gap-8">
              <li>
                <Link
                  to="/"
                  className="text-white font-semibold hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shortlink"
                  className="text-white font-semibold hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Generator
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white font-semibold hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-30 text-white text-center py-6">
        <p>&copy; 2024 LinkShort. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
