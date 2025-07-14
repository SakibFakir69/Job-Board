import React from "react";
import { useLocation } from "react-router";

function Navbar() {

    const ishome = useLocation().pathname

    // ishom ? input : " "

    console.log(ishome)


  return (
    <div className="bg-black w-full p-10">
      <nav className=" flex  justify-around border border-white -mt-10">

        <div>
            <img className="size-20  w-56" src={'521ed31f20ef6319a6b45c9c3855d0e9e1d4837f.png'}/>
        </div>

        <div className="flex justify-center items-center gap-x-10 ">
 
            <div className="border p-2 bg-teal-200/20">
                <p className="border text-white">Freelancer</p>
            </div>
          <p className="text-green-400">BECAME A SELLER</p>
          <b className="text-white">Login</b>

          <button className="btn text-white"> Registration</button>
        </div>

      </nav>

      {
        ishome ==='/' ? (<div>
            <input placeholder="" className="px-10 py-2 border white"/>

        </div>) : ''
      }
    </div>
  );
}

export default Navbar;
