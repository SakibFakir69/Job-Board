import React from "react";

function Footer() {
  return (
    <div className="bg-black w-full">
      <section className="p-8">
        {/* top */}
        <div className="flex justify-around items-center justify-center">

          <h2 className="text-2xl font-semibold text-white flex-1">Reach Your Requirement Goals Right on Schedule</h2>

          <div className="flex-1">
            <p className="text-stone-200">
              Sign up, complete your profile, and start browsing projects.
              Submit proposals and communicate with clients to get hired.
            </p>
            <button className="btn bg-green-400">Get Started</button>
          </div>
        </div>

        {/* mid */}

        <div className=" flex  items-center justify-around">
          <div>
            <img
              className="size-20  w-56"
              src={"521ed31f20ef6319a6b45c9c3855d0e9e1d4837f.png"}
            />
          </div>
          <div className="text-white shadow-md p-4 rounded w-52 space-y-2">
            <a
              href="/about-us"
              className="block text-black hover:text-teal-600"
            >
              About Us
            </a>
            <a
              href="/become-seller"
              className="block text-black hover:text-teal-600"
            >
              Become Seller
            </a>
            <a
              href="/proprojobs"
              className="block text-black hover:text-teal-600"
            >
              ProProJobs
            </a>
          </div>

          <div className=" shadow-md p-4 rounded w-64">
            <h2 className="text-lg font-semibold mb-3">Categories</h2>
            <div className="space-y-2">
              <a
                href="/categories/design"
                className="block text-gray-800 hover:text-teal-600"
              >
                Design & Creative
              </a>
              <a
                href="/categories/development"
                className="block text-gray-800 hover:text-teal-600"
              >
                Development & IT
              </a>
              <a
                href="/categories/music"
                className="block text-gray-800 hover:text-teal-600"
              >
                Music & Audio
              </a>
              <a
                href="/categories/programming"
                className="block text-gray-800 hover:text-teal-600"
              >
                Programming & Tech
              </a>
            </div>
          </div>
          <div className=" shadow-md p-4 rounded w-64">
            <h2 className="text-lg font-semibold mb-3">Support</h2>
            <div className="space-y-2">
              <a
                href="/support/help"
                className="block text-gray-800 hover:text-teal-600"
              >
                Help & Support
              </a>
              <a
                href="/support/faq"
                className="block text-gray-800 hover:text-teal-600"
              >
                FAQ
              </a>
              <a
                href="/support/contact"
                className="block text-gray-800 hover:text-teal-600"
              >
                Contact Us
              </a>
              <a
                href="/support/terms"
                className="block text-gray-800 hover:text-teal-600"
              >
                Terms & Services
              </a>
            </div>
          </div>
        </div>

        {/* last or bottom  */}

        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
