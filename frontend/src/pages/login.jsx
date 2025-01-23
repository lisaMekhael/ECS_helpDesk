import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const backend_url = "http://localhost:3000/api/v1";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backend_url}/login`,
        inputValue,
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        setErrorMessage(response.data?.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      // Optional inline style or a context-based style if you have one (like CustomizationContext)
      style={{ minHeight: "100vh", backgroundColor: "white", color: "inherit" }}
    >
      {/* Outer container matching your Signup layout */}
      <div className="font-[sans-serif] max-w-4xl flex items-center mx-auto md:h-screen p-4">
        <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden w-full">
          {/* LEFT (dark) side */}
          <div className="max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
            <div>
              <h4 className="text-white text-lg">Welcome Back!</h4>
              <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Sign in to continue managing your tickets and accessing your dashboard.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg">Secure &amp; Convenient Login</h4>
              <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                We prioritize your account security. Enjoy a simple and safe login experience.
              </p>
            </div>
          </div>

          {/* RIGHT side (form) */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto"
          >
            <div className="mb-6">
              <h3 className="text-gray-800 text-xl font-bold">Login to your account</h3>
            </div>

            {/* Show error messages (if any) */}
            {errorMessage && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {errorMessage}
              </div>
            )}

            {/* EMAIL */}
            <div className="mb-4">
              <label className="text-gray-600 text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm
                             pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter your email"
                  value={inputValue.email}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="text-gray-600 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm
                             pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter your password"
                  value={inputValue.password}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>

            {/* LOGIN BUTTON */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md 
                           text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
              >
                Login
              </button>
            </div>

            <p className="text-gray-600 text-sm mt-6 text-center">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Sign up
              </Link>
            </p>

            {/* “Continue with” Google & GitHub buttons (optional) */}
            <div className="text-center mt-6">
              <p className="text-gray-500 mb-2">Or continue with</p>
              <div className="flex justify-center">
                {/* Google */}
                <button
                  type="button"
                  className="flex items-center px-4 py-2 border border-gray-300 
                             rounded-md shadow-sm text-sm font-medium text-gray-700 
                             bg-white hover:bg-gray-50 mr-3"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="w-4 h-4 mr-2"
                  />
                  Google
                </button>
                {/* GitHub */}
                <button
                  type="button"
                  className="flex items-center px-4 py-2 border border-gray-300 
                             rounded-md shadow-sm text-sm font-medium text-gray-700 
                             bg-white hover:bg-gray-50"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className="w-4 h-4 mr-2"
                  />
                  GitHub
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
