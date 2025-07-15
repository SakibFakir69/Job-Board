import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className="bg-[#071400] w-full">

      <section className="p-16 w-full">

        {/* top */}
        <div className="flex justify-around items-center px-6 ">

          <h2 className="text-2xl font-bold text-white flex-1 -mt-10">
            Reach Your Requirement Goals Right on <br />
            Schedule
          </h2>

          <div className="flex-1 flex flex-col gap-y-5">
            <p className="text-[#CCCCCC]">
              Sign up, complete your profile, and start browsing projects.
              Submit <br/> proposals and communicate with clients to get hired.
            </p>
            <button className="btn bg-[#05af2b] text-white h-[40px] w-[120px]  rounded-[22px]">
              Get Started
            </button>
          </div>
        </div>

        {/* mid */}

        <div className=" flex  items-start justify-around  border border-t-white/10 p-4 mt-6">
          <div>
            <img
              className="h-12 w-[212px] mt-4 -ml-12"
              src={"/521ed31f20ef6319a6b45c9c3855d0e9e1d4837f.png"}
            />
          </div>
          <div className="text-white shadow-md p-4 rounded w-52 space-y-2 flex flex-col  gap-y-4 ">
            <h2 className="text-lg font-semibold mb-3 text-white"> About US</h2>

            <div className="flex flex-col gap-y-2.5 items-start">
              <a
                href="/about-us"
                className="block text-black hover:text-teal-600 a-color"
              >
                About Us
              </a>

              <a
                href="/become-seller"
                className="block text-black hover:text-teal-600 a-color"
              >
                Become Seller
              </a>
              <a
                href="/proprojobs"
                className="block text-black hover:text-teal-600 a-color"
              >
                ProProJobs
              </a>
            </div>
          </div>

          <div className=" shadow-md rounded w-64 flex flex-col gap-y-4 border border-white/7 justify-center items-start p-4">
            <h2 className="text-lg font-semibold mb-3 text-white">
              Categories
            </h2>

            <div className=" flex flex-col gap-y-2.5">
              <a
                href="/categories/design"
                className="block text-gray-800 hover:text-teal-600 a-color"
              >
                Design & Creative
              </a>
              <a
                href="/categories/development"
                className="block text-gray-800 hover:text-teal-600 a-color"
              >
                Development & IT
              </a>
              <a
                href="/categories/music"
                className="block text-gray-800 hover:text-teal-600 a-color"
              >
                Music & Audio
              </a>
              <a
                href="/categories/programming"
                className="block text-gray-800 hover:text-teal-600 a-color"
              >
                Programming & Tech
              </a>
            </div>
          </div>
          <div className=" shadow-md p-4 rounded w-64 flex flex-col gap-y-4 border border-white/7 justify-center items-start">
            <h2 className="text-lg font-semibold mb-3 text-white ">Support</h2>
            <div className=" flex flex-col gap-y-2.5">
              <a
                href="/support/help"
                className="block text-gray-800 hover:text-teal-600 a-color"
              >
                Help & Support
              </a>
              <a
                href="/support/faq"
                className="block text-gray-800 hover:text-teal-600 a-color"
              >
                FAQ
              </a>
              <a
                href="/support/contact"
                className="block text-gray-800 hover:text-teal-600 a-color"
              >
                Contact Us
              </a>
              <a
                href="/support/terms"
                className="block text-gray-800 hover:text-teal-600 a-color"
              >
                Terms & Services
              </a>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="w-full flex justify-around  items-center">
          <div className="flex gap-x-5 flex-1 ">
            <div className="bg-[#05AF2B]/60 h-40 w-40 blur-3xl  opacity-70 -mt-10 absolute"></div>

            <FaFacebookF className="text-white bg-[#05AF2B] h-[48px] w-[48px] rounded-full p-2 z-50 relative" />
            <FaInstagram className="h-[48px] w-[48px] text-stone-200 p-2 bg-teal-200/20 rounded-full z-50 relative" />
            <BsTwitterX className="h-[48px] w-[48px] text-stone-200 p-2 bg-teal-200/20 rounded-full z-50 relative" />
          </div>

          <div className="flex-1">
            <h1 className="text-white font-semibold">Our Popular Post</h1>

            <div className=" flex flex-1 w-full">
              {/* 1 img footer */}

              <div className="flex gap-x-6  w-full mt-4 ">
                <img
                  className="w-[106px] h-[72px]"
                  src="/aa47ed3130811f2c3a7bb959926a068ce1a7e389.jpg"
                  alt="footer"
                />

                <div className="flex flex-col gap-y-2 w-full">
                  <span className="text-color">November 7, 2024</span>
                  <p className="text-white font-semibold">
                    Unveils the Best Canadian Cities for Biking
                  </p>
                </div>
              </div>

              <div className="flex gap-x-6  border  w-full">
                <img
                  className="w-[106px] h-[72px]"
                  src="/aa47ed3130811f2c3a7bb959926a068ce1a7e389.jpg"
                  alt="footer"
                />

                <div className="flex flex-col gap-y-2 ">
                  <span className="text-color">November 7, 2024</span>
                  <p className="text-white font-medium">
                    Unveils the Best Canadian Cities for Biking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full justify-center items-center h-14">
        <p className="text-color flex justify-center items-center">
          © QuantumEdge Software INC. 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
