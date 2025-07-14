import React from "react";

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
  subCategoryTitle,
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

  return (
    <div className="border rounded-lg p-4 shadow-sm border-stone-200/20 transition hover:shadow-lg">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-1">{title}</h2>

      {/* Posted Date */}
      <p className="text-sm text-gray-500 mb-2">Posted on {formattedDate}</p>

      {/* Category Info */}
      <div className="space-y-1 mb-3 text-sm">
        <p>
          <strong>Category:</strong> {categoryTitle}
        </p>
        <p>
          <strong>Sub-Category:</strong> {subCategoryTitle}
        </p>
        <p>
          <strong>Job Type:</strong> {jobTypeTitle}
        </p>
      </div>

      {/* Description (clamped to 3 lines) */}
      <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>

      {/* Budget & Timing */}
      <div className="mb-3 text-sm">
        <p>
          <strong>Budget:</strong> {budgetType} (${rateFrom}–${rateTo})
        </p>
        <p>
          <strong>Duration:</strong> {duration} • <strong>Capacity:</strong>{" "}
          {capacity}
        </p>
      </div>

      {/* Skills */}
      <div className="mb-2">
        <strong>Skills:</strong> {skills.length > 0 ? skills.join(", ") : "—"}
      </div>

      {/* Keywords */}
      <div>
        <strong>Keywords:</strong>{" "}
        {keywords.length > 0 ? keywords.join(", ") : "—"}
      </div>
    </div>
  );
}
