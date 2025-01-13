import React, { useState } from "react";
import bg from "../../../public/Login-background.jpg";
import logo from "../../../public/sweetpencilbdlogo.png";
import { FaHome, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { loading, setLoading } = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // navigate(from, { replace: true });

    try {
      //   await signIn(email, password);
      // navigate(from, { replace: true });
      navigate("/");
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Log In Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  // google sing in handle function

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-cover bg-center min-h-screen w-full"
      >
        <div className="w-full max-w-xl p-4 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-md mx-auto">
          <Link
            to="/"
            className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center"
          >
            <FaHome className="text-white text-xl" />
          </Link>
          <img
            src={logo}
            alt="Login image"
            className="flex mx-auto h-36 w-36 md:h-44 md:w-44"
          />
          <h1 className="text-md md:text-2xl font-bold text-center uppercase">
            Log <span className="text-[#f57224] ">in</span>
          </h1>
          {/* onSubmit={handleLogin} */}
          <form noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600"
              />
              <div className="flex justify-end text-xs dark:text-gray-600">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              disabled={loading}
              className="w-1/2 flex justify-center items-center mx-auto md:w-full px-1 rounded-md py-3 bg-[#f57224]"
            >
              {loading ? (
                <FaSpinner className="animate-spin text-xl text-white mx-auto" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
