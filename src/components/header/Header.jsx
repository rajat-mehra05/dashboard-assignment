import React from "react";

const Header = () => {
  return (
    <div className="h-[93px] border-b-2 border-[#00000029] shadow-sm">
      <div className="flex justify-between py-4">
        <div className="flex space-x-2 items-center pl-6">
          <div>
            <img src="/assets/hero.png" alt="hero icon" />
          </div>
          <h1 className="text-[#FFFFFF] text-2xl"> Sabertooth </h1>
        </div>

        <div className="flex space-x-2 items-center pr-24">
          <div className="w-[50px] h-[50px]">
            <img
              src="/assets/user.svg"
              alt="user icon"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <h1 className="text-[#FFFFFF]"> User Name </h1>
          <img src="/assets/downArrow.svg" alt="down arrow" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Header;
