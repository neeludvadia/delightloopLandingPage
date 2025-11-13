"use client";

import { useState, useRef } from "react";

export default function ExpandableText({
  children,
  lines = 4, // how many lines to show when collapsed
}: {
  children: React.ReactNode;
  lines?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (expanded && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setExpanded(!expanded);
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center">

      {/* TEXT WITH TRUE MULTILINE ELLIPSIS */}
      <div
        className={`text-white text-lg leading-relaxed transition-all duration-300 ${
          !expanded ? "line-clamp-6" : ""
        }`}
        style={
          !expanded
            ? {
                WebkitLineClamp: lines,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }
            : {}
        }
      >
        {children}
      </div>

      {/* Toggle button */}
      <button
        onClick={handleToggle}
        className="mt-3 text-purple-200 underline text-sm hover:text-white transition"
      >
        {expanded ? "Show Less" : "Continue Reading…"}
      </button>
    </div>
  );
}
