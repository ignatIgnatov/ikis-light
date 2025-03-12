import React from "react";
import {
  registrationFormControlFirstPart,
  registrationFormControlSecondPart,
} from "../../utils/utils";
import InputComponent from "../formElements/InputComponent";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="mt-20 px-4 flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl text-gray-700 font-bold">Registration</h1>

        {/* Social login buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 p-6 shadow-lg rounded-lg bg-gray-100">
          <button
            className="flex items-center w-full sm:w-1/2 justify-center gap-3 bg-white border border-gray-300 px-4 py-2 text-base sm:text-lg text-gray-700 font-medium rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => console.log("Register with Google")}
          >
            <FaGoogle size={20} color="#DB4437" />
            Register with Google
          </button>
          <button
            className="flex items-center w-full sm:w-1/2 justify-center gap-3 bg-white border border-gray-300 px-4 py-2 text-base sm:text-lg text-gray-700 font-medium rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => console.log("Register with Facebook")}
          >
            <FaFacebookF size={20} color="#1877F2" />
            Register with Facebook
          </button>
        </div>

        {/* Registration form */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-8 shadow-lg rounded-lg bg-gray-100">
          <div className="flex flex-col gap-4">
            {registrationFormControlFirstPart.map((item) => (
              <InputComponent
                key={item.label}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
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

        {/* Submit button */}
        <button
          className="w-full max-w-2xl bg-[#12A89D] text-white text-lg font-medium py-3 rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-md"
          onClick={() => console.log("Register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
