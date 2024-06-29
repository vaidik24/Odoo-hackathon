import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { username, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", formData);
      console.log(res.data); // Handle successful login
      // store the res.data in localstorage
      localStorage.setItem("token", res.data.token);
      // store the username
      localStorage.setItem("username", res.data.username);
      navigate("/"); // Redirect to Home page
    } catch (err) {
      console.error(err.response?.data); // Handle errors
      // Optionally show error message to user
    }
  };

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
          <div className="container mx-auto flex bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <div
              className="w-1/2 bg-center bg-cover"
              style={{ backgroundImage: "url('https://source.unsplash.com/random/800x600?workspace')" }}
            >
              <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                  <p className="text-xl">
                    Login to access your personalized dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2 p-12">
              <div className="mb-8">
                <svg
                  className="w-10 h-10 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8-8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-6">Login to Your Account</h1>

              <form onSubmit={onSubmit}>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Username</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="fas fa-user text-gray-400"></i>
                    </span>
                    <input
                      type="text"
                      className="w-full pl-10 pr-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your username or email"
                      name="username"
                      value={username}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="fas fa-lock text-gray-400"></i>
                    </span>
                    <input
                      type="password"
                      className="w-full pl-10 pr-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link to={"/register"} className="text-blue-500 hover:underline">Sign up</Link>
                </p>
              </div>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md hover:bg-gray-700 transition duration-150">
                    <i className="fab fa-google text-red-500 mr-2"></i> Google
                  </button>
                  <button className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md hover:bg-gray-700 transition duration-150">
                    <i className="fab fa-facebook text-blue-600 mr-2"></i> Facebook
                  </button>
                  <button className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md hover:bg-gray-700 transition duration-150">
                    <i className="fab fa-apple mr-2"></i> Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
