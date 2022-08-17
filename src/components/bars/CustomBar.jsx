import React from "react";

const CustomBar = ({ activeCount, isFullActiveCells }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* this div will render when we have inactive cells */}
      {20 - activeCount > 0 && (
        <div className="flex flex-col gap-2">
          {Array(20 - activeCount)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-full h-[6px] bg-[#6C6788]"></div>
            ))}
        </div>
      )}

      {activeCount > 0 && (
        <div className="flex flex-col gap-2">
          {/* this div will render when we have active cells  */}
          {Array(activeCount)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-full h-[6px]"
                style={{
                  background: "#E2795B",
                }}
              ></div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CustomBar;

/* 
: isFullActiveCells
                    ? "#E2795B"
                    : getCellColor(i, activeCount),
*/
