import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/register.png";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    role: "fan", // Default role
  });

  const { fullName, email, username, password, role } = formData;


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData
      );
      console.log(res.data); // Handle successful registration
      // Optionally redirect or show success message
    } catch (err) {
      console.error(err.response.data); // Handle errors
    }
  };

  return (
    <>
      <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
        <div className="container mx-auto flex">
          <div className="w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-2">Create your Account</h1>
            <p className="mb-6">
              Start your website in seconds. Already have an account?{" "}
              <Link className="text-blue-500 hover:underline" to={"/login"}>
                Login here
              </Link>
              .
            </p>

            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bonnie Green"
                    className="w-full p-2 bg-gray-800 rounded"
                    name="fullName"
                    value={fullName}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm" htmlFor="email">
                    Your email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full p-2 bg-gray-800 rounded"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block mb-2 text-sm" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. bonniegreen01"
                    className="w-full p-2 bg-gray-800 rounded"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-2 bg-gray-800 rounded"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block mb-2 text-sm" htmlFor="role">
                    Role
                  </label>
                  <select
                    className="w-full p-2 bg-gray-800 rounded"
                    name="role"
                    value={role}
                    onChange={onChange}
                  >
                    <option value="fan">Fans</option>
                    <option value="musician">Musicians</option>
                  </select>
                </div>
              </div>

              <div className="text-center my-4">or</div>

              <button
                type="button"
                className="w-full p-2 mb-3 bg-gray-800 rounded flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                Sign up with Google
              </button>
              <button
                type="button"
                className="w-full p-2 mb-6 bg-gray-800 rounded flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Sign up with Apple
              </button>

              <div className="flex items-start mb-4">
                <input type="checkbox" className="mr-2 mt-1" />
                <p className="text-sm">
                  By signing up, you are creating a Flowbite account, and you
                  agree to Flowbite's{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div className="flex items-start mb-6">
                <input type="checkbox" className="mr-2 mt-1" />
                <p className="text-sm">
                  Email me about product updates and resources.
                </p>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img
              src={img}
              alt="Illustration"
              className="max-w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;