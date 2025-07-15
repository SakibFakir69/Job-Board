import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiBagSimple } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
export default function Card({
  title,
  budgetType,
  description,
  createdAt,
  capacity,
  duration,
  rateFrom,
  rateTo,
  categoryTitle,
  subCategoryTitle = [],
  jobTypeTitle,
  skills = [],
  keywords = [],
}) {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Unknown date";

  console.log(skills, keywords);

  const subSkill = [
    {
      id: 1,
      title: "App Design",
    },
    {
      id: 2,
      title: "Art Generation",
    },
    {
      id: 3,
      title: "Illustration",
    },
  ];

  return (
    <div className="border rounded-lg p-4 shadow-sm border-stone-200/20 transition hover:shadow-lg flex flex-col gap-y-3">
      {/* Posted Date */}
      <p className="text-sm text-gray-500 mb-2">Posted on {formattedDate}</p>
      {/* Title */}
      <b className="text-xl mb-4">{title}</b>

      {/* Budget & Timing */}
      <div className="mb-3 text-sm bg-[#CCCCCC]/30 w-[372px]  rounded mt-2 ">
        <p className="flex justify-between items-center p-6 h-[44px]">
          <b className="text-[#888888]">{budgetType}</b>{" "}
          <b className="text-[#4B4B4B]">
            ${rateFrom}–${rateTo}
          </b>
        </p>
      </div>

      {/* Description =*/}
      <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>

      {/* remote */}
      <div className="flex gap-x-7 w-full">
        <p className="text-[#9747FF] h-[30px] w-[82px]  bg-[#FAF7FF] rounded-[18px] flex justify-center items-center">
          <FaLocationDot /> Remote
        </p>
        <p className="text-[#DB3131] h-[30px] w-[130px] bg-[#FFF5F5] rounded-[18px] flex justify-center items-center gap-x-1 text-sm font-medium">
          <PiBagSimple className="text-base" />
          Senior level
        </p>

        <p className="h-[30px] w-[130px] bg-[#E9FFEE] rounded-[18px] text-green-600 flex items-center justify-center gap-x-1 text-sm font-medium">
          <IoIosPeople className="text-base" />2 Freelancer
        </p>
      </div>

      {/* Category Info */}
      <div className="space-y-3 mb-3  gap-x-8 mt-6 flex">
        {subSkill.map((item) => (
          <div className="h-[32px] w-[108px] bg-[#CCCCCC]/30 rounded-[18px] text-sm font-semibold flex justify-center items-center">
            {item.title}
          </div>
        ))}
      </div>

      <b>+{skills.length} More</b>

      <p className="w-full border border-stone-300 "></p>

      <p className="">
        {" "}
        <span className="text-[#CCCCCC]">Posted by</span>
        <b>Eamman Olio</b>
      </p>

      <div>
        <button className="bg-[#1E1E1E] hover:bg-[#05AF2B] cursor-pointer rounded-full text-white h-[40px] w-[120px] ">
          Apply Now
        </button>
      </div>
    </div>
  );
}
