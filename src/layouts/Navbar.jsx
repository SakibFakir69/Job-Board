import React from "react";
import { useLocation } from "react-router";
import { IoIosSearch } from "react-icons/io";
function Navbar() {
  const ishome = useLocation().pathname;

  // ishom ? input : " "

  console.log(ishome);

  // // className={`${
  //       ishome !== "/" && "h-[220px] "
  //     } bg-[#071400] py-16 h-[100px]`}

  return (
    <div

    className={`${ishome==='/' ? "bg-[#071400] py-16 h-[220px] " : " bg-[#071400] py-10 "}`}
      
    >
      <div className="h-20 w-20 z-40 -mt-6 bg-green-400 blur-3xl absolute"></div>

      <nav className=" flex  justify-around gap-x-36 ">
        <div>
          <img
            className="w-[234px] h-[59px]"
            src={"/521ed31f20ef6319a6b45c9c3855d0e9e1d4837f.png"}
          />
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <div className="border p-2 bg-teal-200/20 w-[345px] flex  h-[50px] rounded">
            <div className="p-1 ">
              <select className="text-white  -mt-1.5 p-1 bg-teal-200/10 flex justify-center items-center  w-[122px] h-[36px]">
                <option>Freelancer </option>
              </select>
            </div>
          </div>

          <p className="text-green-400">BECAME A SELLER</p>
          <b className="text-white">Login</b>

          <button className=" w-[122px] h-[42px] bg-[#05AF2B]  text-white rounded-full">
            {" "}
            Registration
          </button>
        </div>
      </nav>

      {ishome === "/" && <p className="w-full border-2 border-white/5"></p>}

      {ishome === "/" ? (
        <div className=" w-[1920] flex justify-around items-center bg-[#071400] ">
          <div className="border flex justify-start gap-x-4">
            <form className="relative w-[566px] h-[58px] -ml-9">
              {/* Input field */}
              <input
                type="search"
                placeholder="Search your needs"
                required
                className="w-full h-full pr-40 border-grad pl-4 text-white rounded-md bg-[#1f1f1f]
               border-l-2 border-t-2 border-b-2 border-r-0
               border-l-[#D86F13] border-t-[#55C41A] border-b-[#05AF2B]
               placeholder-white focus:outline-none"
              />

              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <select className="bg-transparent text-white font-semibold px-2 py-1 text-sm outline-none">
                  <option>Web Developer</option>
                </select>

                <button
                  type="submit"
                  className="bg-[#05AF2B] w-[42px] h-[42px] text-white flex items-center justify-center rounded-full"
                >
                  <IoIosSearch size={20} />
                </button>
              </div>
            </form>

            <button className="w-[166px] h-[50px] bg-[#05AF2B] text-white rounded-full">
              Advanced search
            </button>
          </div>

          <div className="">
            <img src="Star 2.png" className="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
