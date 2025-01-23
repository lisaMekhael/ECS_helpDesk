import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();


  return (
    <>
      {/* NAVBAR */}
      <header className="bg-white shadow-md fixed w-full z-50 top-0 left-0 h-[80px] flex items-center">
        <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <a href="#">
            <img
              src="/enterprise_consultancy_services_logo.jpeg"
              alt="logo"
              className="w-40"
            />
          </a>

          {/* NAV LINKS */}
          <nav
            className={`lg:flex lg:items-center lg:space-x-6 
            ${isOpen ? 'block fixed inset-0 bg-white p-6 z-50' : 'hidden lg:block'}`}
          >
            {/* Close button (mobile) */}
            {isOpen && (
              <button
                className="lg:hidden absolute top-4 right-6 bg-gray-100 rounded-full p-2"
                onClick={handleToggle}
              >
                ✕
              </button>
            )}

            {/* Navigation Links */}
            <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-6 text-lg font-semibold">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>

              {/* Dropdown Menu */}
              <li
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#" className="hover:text-blue-600 flex items-center">
                  Support
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52 
                        a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734 
                        a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52 
                        a2.38 2.38 0 0 1-1.68266.69734z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Dropdown Items */}
                <ul
                  className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50 transition-all duration-300 
                  ${isDropdownOpen ? 'block' : 'hidden'}`}
                >
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">View Tickets</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Create Ticket</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Rate Agent</a></li>
                </ul>
              </li>

              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
            </ul>
          </nav>

          {/* Sign Up Button */}
          <button
            className="bg-blue-100 hover:bg-blue-200 flex items-center gap-2 transition-all font-semibold rounded-md px-5 py-2 whitespace-nowrap"
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden ml-5" onClick={handleToggle}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 
                1 0 110 2H4a1 1 0 
                01-1-1zM3 10a1 1 0 
                011-1h12a1 1 0 
                110 2H4a1 1 0 
                01-1-1zM3 15a1 1 0 
                011-1h12a1 1 0 
                110 2H4a1 1 0 
                01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* This ensures content is pushed down */}
      <div className="h-[70px]"></div>  {/* Add empty space equal to navbar height */}
    </>
  );
}

export default NavBar;
