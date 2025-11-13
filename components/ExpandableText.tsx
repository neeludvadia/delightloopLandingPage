"use client";

import { useState, useRef } from "react";

export default function ExpandableText({
  children,
  maxHeight = 120,
}: {
  children: React.ReactNode;
  maxHeight?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (expanded && containerRef.current) {
      // Scroll the section into view when collapsing
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setExpanded((prev) => !prev);
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center">
      
      <div
        className={`text-white text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-300 overflow-hidden`}
        style={{ maxHeight: expanded ? "900px" : `${maxHeight}px` }}
      >
        {children}
      </div>

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="mt-3 text-purple-200 underline text-sm hover:text-white transition"
      >
        {expanded ? "Show Less" : "Continue Reading…"}
      </button>
    </div>
  );
}
