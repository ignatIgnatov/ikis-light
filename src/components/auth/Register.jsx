import React, { useState } from "react";
import {
  businesFormControlFirstPart,
  businesFormControlSecondPart,
  registrationFormControlFirstPart,
  registrationFormControlSecondPart,
} from "../../utils/utils";
import InputComponent from "../formElements/InputComponent";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [isActive, setIsActive] = useState("user");
  return (
    <div className="mt-32 px-2 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl text-gray-600 font-semibold">REGISTRATION</h1>

        <div className="lg:w-2/3 w-full flex lg:flex-row justify-center items-center gap-4 p-2 shadow-lg rounded-md bg-gray-100">
          {/* USER ACCOUNT */}
          <div
            onClick={() => setIsActive("user")}
            className={`p-2 px-6 rounded-md shadow-lg cursor-pointer ${
              isActive === "user" ? "bg-[#12A89D]" : "bg-gray-200"
            }`}
          >
            <h1 className="text-lg text-white font-semibold">USER ACCOUNT</h1>
          </div>

          {/* BUSINESS ACCOUNT */}
          <div
            onClick={() => setIsActive("business")}
            className={`p-2 px-6 rounded-md shadow-lg cursor-pointer ${
              isActive === "business" ? "bg-[#12A89D]" : "bg-gray-200"
            }`}
          >
            <h1 className="text-lg text-white font-semibold">
              BUSINESS ACCOUNT
            </h1>
          </div>
        </div>

        {isActive === "user" ? (
          <>
            <div className="lg:w-2/3 w-full flex flex-col lg:flex-row justify-center items-center gap-4 p-4 shadow-lg rounded-md bg-gray-100">
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
          </>
        ) : (
          <div className="lg:w-2/3 w-full flex lg:flex-row flex-col justify-center items-center gap-6 p-10 shadow-lg rounded-md bg-gray-100">
            <div className="w-full flex flex-col justify-center items-center gap-6">
              {businesFormControlFirstPart.map((item) => (
                <InputComponent
                  key={item.label}
                  label={item.label}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              ))}
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-6">
              {businesFormControlSecondPart.map((item) => (
                <InputComponent
                  key={item.label}
                  label={item.label}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              ))}
            </div>
          </div>
        )}

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
