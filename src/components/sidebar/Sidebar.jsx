import React from "react";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-[65px] bg-gradient-to-b from-[#8857B3] to-[#E2795B]">
      <div className="flex flex-col space-y-12 items-center pt-20">
        <div className="w-[22px] h-[22px]">
          <img
            src="/assets/sidebar/home.svg"
            alt="home icon"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="w-[22px] h-[22px]">
          <img
            src="/assets/sidebar/feed.svg"
            alt="feed icon"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="w-[22px] h-[22px]">
          <img
            src="/assets/sidebar/settings.svg"
            alt="settings icon"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="w-[22px] h-[22px]">
          <img
            src="/assets/sidebar/help.svg"
            alt="help icon"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
