
import React, { useState } from "react";

// react icons
import {
  IoCheckmarkDoneCircleSharp,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";

import { useForm } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosUnlock } from "react-icons/io";


function Registration() {



   const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [StrongPassword, setStrongPassword] = useState("");
    const [signal, setSignal] = useState("");
  
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
  
    const handlePasswordChange = (e) => {
      const password = e.target.value;
      setStrongPassword(password);
  
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
     
    };
    
  const getErrorText = () => {
    switch (signal) {
      case "length-error":
        return "Password must be at least 8 characters long.";
        break;
      case "uppercase-error":
        return "Password must contain at least one uppercase letter.";
        break;
      case "lowercase-error":
        return "Password must contain at least one lowercase letter.";
        break;
      case "number-error":
        return "Password must contain at least one number.";
        break;
      case "symbol-error":
        return "Password must contain at least one special character.";
        break;
      default:
        return "Wow! Very strong password.";
    }
  };
  return (
     <div className="bg-[#071400] m-16 p-14 rounded-2xl">
          <section className="flex  w-full justify-center  gap-x-6">
            <div className="flex-1 w-[442px] h-[682px] flex flex-col gap-y-8">
              <div className="flex flex-col   justify-center items-center  gap-y-9  ">
                <div className="-mt-5 flex flex-col gap-y-4">
                  <h2 className="text-3xl font-semibold text-white">
                    Open your account
                  </h2>
                  <p className="text-white">
                    Already have an account?
                    <span className="text-green-400"> Sign in</span>
                  </p>
                </div>
    
              
                <form onSubmit={handleSubmit(onSubmit)} className="w-[442px]">
                  {/* Email Field */}
                  <div className="relative mb-6">
                         <MdOutlineMailOutline className="absolute top-4 left-4 text-stone-300 size-5 " />
                    
    
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400 -z-50"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="w-[442px] h-[50px] border text-white p-4 ml-1 rounded-[46px] border-green-400 bg-transparent pl-10"
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
    
                  {/* Password Field */}
                  <div className="w-full mb-4">
                   
                    <div className="w-full relative">
                            <IoIosUnlock className="absolute top-4 left-4 text-stone-300 size-5" />
                      <input
                        type={isEyeOpen ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                        })}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className="peer border-[#e5eaf2] border outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300 rounded-[46px] bg-transparent text-[#abc2d3] pl-10"
                      />
                      {errors.password && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.password.message}
                        </p>
                      )}
    
                      {StrongPassword !== "" && (
                        <p className={`text-[0.9rem] mt-1`}>
                          {signal === "strong" ? (
                            <span className="text-green-500 flex items-center gap-1">
                              <IoCheckmarkDoneCircleSharp />
                              {getErrorText()}
                            </span>
                          ) : (
                            <span className="text-red-500 flex items-center gap-1">
                              <MdErrorOutline />
                              {getErrorText()}
                            </span>
                          )}
                        </p>
                      )}
    
                       {isEyeOpen ? (
                        <IoEyeOutline
                          className="absolute top-3.5 size-6 right-4 text-[#777777] cursor-pointer"
                          onClick={() => setIsEyeOpen(false)}
                        />
                      ) : (
                        <IoEyeOffOutline
                          className="absolute top-3.5 right-4 size-6 text-[#777777] cursor-pointer"
                          onClick={() => setIsEyeOpen(true)}
                        />
                      )}
                    </div>
                  </div>
    
                  {/* Confirm Password Field */}
                
    
                  <div className="w-full">
                    <button
                      type="submit"
                      className="bg-[#05af2b] h-[50px] rounded-full text-white w-full"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
    
              <div className="flex justify-center items-center flex-col p-4 gap-y-5">
                {/* divider */}
              <div className="flex w-[442px] justify-between items-center gap-8 -mt-5">
                <hr className="w-full border border-stone-300" />
                <div className="divider text-white ">or</div>
                <hr className="w-full border border-stone-300" />
              </div>
              {/* icon */}
    
              <div className="w-full flex gap-x-4 justify-center items-center ">
                <FaFacebookF className="text-white  bg-[#1E1E1E] h-[60px] w-[120px]  rounded-[46px] p-3" />
                <FaApple className="text-white  bg-[#1E1E1E] h-[60px] w-[120px]  rounded-[46px] p-3" />
                <RiTwitterXLine className="text-white  bg-[#1E1E1E] h-[60px] w-[120px]  rounded-[46px] p-3" />
              </div>
              {/* text */}
              
              </div>
    
            </div>
    
            <div className="flex-1 min-h-full border ">
              <img
                src="/29cbdc3e478a6d9ca2543961ea9cfce84377972d.jpg"
                className="rounded-2xl h-full w-full object-cover"
              />
    
    
            </div>
          </section>
        </div>
  )
}

export default Registration