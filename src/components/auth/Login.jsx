import React from "react";
import { loginFormControl } from "../../utils/utils";
import InputComponent from "../formElements/InputComponent";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="mt-36 px-2 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl text-gray-600 font-semibold mb-10">SIGN IN</h1>

        <div className="w-1/3 flex flex-col justify-center items-center gap-4 p-4 shadow-lg rounded-md bg-gray-100">
          <button
            className="flex items-center w-full justify-center gap-3 bg-white border border-gray-300 px-4 py-2 text-lg text-gray-700 font-medium rounded-md transition-transform duration-500 transform hover:scale-105 hover:shadow-md"
            onClick={() => console.log("Register with Google")}
          >
            <FaGoogle size={20} color="#DB4437" />
            Sign in with Google
          </button>
          <button
            className="flex items-center w-full justify-center gap-3 bg-white border border-gray-300 px-4 py-2 text-lg text-gray-700 font-medium rounded-md transition-transform duration-500 transform hover:scale-105 hover:shadow-md"
            onClick={() => console.log("Register with Facebook")}
          >
            <FaFacebookF size={20} color="#1877F2" />
            Sign in with Facebook
          </button>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center gap-6  p-10 shadow-lg rounded-md bg-gray-100">
          {loginFormControl.map((item) => (
            <InputComponent
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
            />
          ))}
        </div>

        <button
          className=" mb-10 inline-flex w-2/3 items-center justify-center bg-[#12A89D] px-4 py-2 text-lg text-white font-medium rounded-md transition-transform duration-500 transform hover:scale-105 hover:shadow-md"
          onClick={() => console.log("Register")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
