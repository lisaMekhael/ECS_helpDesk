import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// If you have a CustomizationContext that sets backgroundColor, fontColor, etc.:
import { useCustomization } from "../contexts/CustomizationContext";

const backend_url = "http://localhost:3000/api/v1";

const Signup = () => {
  const navigate = useNavigate();
  const { customization } = useCustomization();

  const [inputValue, setInputValue] = useState({
    firstName: "",
    secondName: "",
    email: "",
    username: "",
    password: "",
    mfaEnabled: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { firstName, secondName, email, username, password, mfaEnabled } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backend_url}/register`,
        {
          ...inputValue,
          displayName: username,
          role: "user",
        },
        { withCredentials: true }
      );

      if (response.status === 201) {
        setSuccessMessage("Sign up successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setErrorMessage(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      // If using your customization object
      style={{
        backgroundColor: customization.backgroundColor || "white",
        color: customization.fontColor || "inherit",
        fontSize: `${customization.fontSize || 16}px`,
        minHeight: "100vh",
      }}
    >
      {/* Outer container mimicking your Tailwind example */}
      <div className="font-[sans-serif] max-w-4xl flex items-center mx-auto md:h-screen p-4">
        <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden w-full">
          {/* LEFT (dark) side */}
          <div className="max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
            <div>
              <h4 className="text-white text-lg">Create Your Account</h4>
              <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Welcome to our registration page! Get started by creating your account.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg">Simple &amp; Secure Registration</h4>
              <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Our registration process is designed to be straightforward and secure. 
                We prioritize your privacy and data security.
              </p>
            </div>
          </div>

          {/* RIGHT side (form) */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto"
          >
            <div className="mb-6">
              <h3 className="text-gray-800 text-xl font-bold">Sign up to your account</h3>
            </div>

            {/* Show error/success messages */}
            {errorMessage && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
                {successMessage}
              </div>
            )}

            {/* FIRST NAME */}
            <div className="mb-4">
              <label className="text-gray-600 text-sm mb-2 block">First Name</label>
              <div className="relative flex items-center">
                <input
                  name="firstName"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm
                             pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>

            {/* SECOND NAME */}
            <div className="mb-4">
              <label className="text-gray-600 text-sm mb-2 block">Second Name</label>
              <div className="relative flex items-center">
                <input
                  name="secondName"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm
                             pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter your second name"
                  value={secondName}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>

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
                  value={email}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>

            {/* USERNAME */}
            <div className="mb-4">
              <label className="text-gray-600 text-sm mb-2 block">Username</label>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm
                             pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter your username"
                  value={username}
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
                  value={password}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>

            {/* MFA DROPDOWN */}
            <div className="mb-4">
              <label className="text-gray-600 text-sm mb-2 block">
                Enable Multi-Factor Authentication
              </label>
              <select
                name="mfaEnabled"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm
                           pl-4 pr-8 py-2.5 rounded-md outline-blue-500 cursor-pointer"
                value={mfaEnabled ? "true" : "false"}
                onChange={(e) =>
                  setInputValue({ ...inputValue, mfaEnabled: e.target.value === "true" })
                }
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            {/* (OPTIONAL) Terms & Conditions checkbox */}
            <div className="flex items-center mt-4">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I accept the{" "}
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* SIGN UP BUTTON */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md 
                           text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
              >
                Sign up
              </button>
            </div>

            <p className="text-gray-600 text-sm mt-6 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login
              </Link>
            </p>

            {/* “Continue with” Google & GitHub buttons */}
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

export default Signup;
