"use client";

import { useState } from "react";

export default function ExpandableText({
  children,
  maxHeight = 120,
}: {
  children: React.ReactNode;
  maxHeight?: number; // optional override
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Collapsible Content */}
      <div
        className={`text-white text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-300 overflow-hidden`}
        style={{ maxHeight: expanded ? "900px" : `${maxHeight}px` }}
      >
        {children}
      </div>

      {/* Buttons */}
      {!expanded ? (
        <button
          className="mt-3 text-purple-200 underline text-sm hover:text-white transition"
          onClick={() => setExpanded(true)}
        >
          Continue Reading…
        </button>
      ) : (
        <button
          className="mt-1 text-purple-200 underline text-sm hover:text-white transition"
          onClick={() => setExpanded(false)}
        >
          Show Less
        </button>
      )}
    </div>
  );
}
