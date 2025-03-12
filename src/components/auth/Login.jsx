import React, { useState } from "react";
import { loginFormControl } from "../../utils/utils";
import InputComponent from "../formElements/InputComponent";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="mt-10 px-4 flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl text-gray-700 font-bold mb-6">Sign In</h1>

        {/* Social login buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 p-6 shadow-lg rounded-lg bg-gray-100">
          <button
            className="flex items-center w-full sm:w-1/2 justify-center gap-3 bg-white border border-gray-300 px-4 py-2 text-base sm:text-lg text-gray-700 font-medium rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => console.log("Sign in with Google")}
          >
            <FaGoogle size={20} color="#DB4437" />
            Sign in with Google
          </button>
          <button
            className="flex items-center w-full sm:w-1/2 justify-center gap-3 bg-white border border-gray-300 px-4 py-2 text-base sm:text-lg text-gray-700 font-medium rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => console.log("Sign in with Facebook")}
          >
            <FaFacebookF size={20} color="#1877F2" />
            Sign in with Facebook
          </button>
        </div>

        {/* Login form */}
        <div className="w-full p-8 shadow-lg rounded-lg bg-gray-100">
          <form className="w-full flex flex-col justify-center items-center gap-6">
            {loginFormControl.map((item) => (
              <InputComponent
                key={item.label}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
              />
            ))}
            <div>
              <div className="flex items-center gap-2">
                <div
                  onClick={handleCheckboxChange}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {isChecked ? (
                    <FaCheckSquare size={24} color="#12A89D" />
                  ) : (
                    <FaRegSquare size={24} color="#999" />
                  )}
                </div>
                <label>I agree to the terms and conditions</label>
              </div>
            </div>
            <button
              className="w-full bg-[#12A89D] text-white text-lg font-medium py-3 rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-md"
              onClick={(e) => {
                e.preventDefault();
                console.log("Sign in");
              }}
            >
              Sign in
            </button>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div>
                <span className="text-sm">You don't have an account yet?</span>{" "}
                <Link className="font-semibold text-sm hover:text-red-800" to={"/register"}>
                  Register
                </Link>
              </div>
              <div>
                <span className="text-sm">Forgot your password?</span>{" "}
                <Link className="font-semibold text-sm hover:text-red-800" to={"/register"}>
                  Click here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
