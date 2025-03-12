import React from "react";
import {
  registrationFormControlFirstPart,
  registrationFormControlSecondPart,
} from "../../utils/utils";
import InputComponent from "../formElements/InputComponent";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-32 px-2 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl text-gray-600 font-semibold">REGISTRATION</h1>

        <div className="lg:w-2/3 w-full flex flex-col justify-center items-center gap-4 p-4 shadow-lg rounded-md bg-gray-100">
          <button
            className="flex font-medium items-center lg:w-2/3 w-full justify-center gap-3 bg-white border border-gray-300 px-4 py-2 text-sm lg:text-lg text-gray-700 rounded-md transition-transform duration-500 transform hover:scale-105 hover:shadow-md"
            onClick={() => console.log("Register with Google")}
          >
            <FaGoogle size={20} color="#DB4437" />
            Register with Google
          </button>
          <button
            className="flex font-medium items-center lg:w-2/3 w-full justify-center gap-3 bg-white border border-gray-300 px-4 py-2 text-sm lg:text-lg text-gray-700 rounded-md transition-transform duration-500 transform hover:scale-105 hover:shadow-md"
            onClick={() => console.log("Register with Facebook")}
          >
            <FaFacebookF size={20} color="#1877F2" />
            Register with Facebook
          </button>
        </div>

        <div className="lg:w-2/3 w-full flex lg:flex-row flex-col justify-center items-center gap-6 p-10 shadow-lg rounded-md bg-gray-100">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            {registrationFormControlFirstPart.map((item) => (
              <InputComponent
                key={item.label}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
              />
            ))}
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-6">
            {registrationFormControlSecondPart.map((item) => (
              <InputComponent
                key={item.label}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:w-2/3 lg:flex-row justify-end items-center w-full">
          <div>
            <span className="text-sm">You already have an account?</span>{" "}
            <Link
              className="font-semibold text-sm hover:text-red-800"
              to={"/login"}
            >
              Sign in
            </Link>
          </div>
        </div>

        <button
          className="mb-10 inline-flex w-2/3 items-center justify-center bg-[#12A89D] px-4 py-2 text-lg text-white font-medium rounded-md transition-transform duration-500 transform hover:scale-105 hover:shadow-md"
          onClick={() => console.log("Register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
