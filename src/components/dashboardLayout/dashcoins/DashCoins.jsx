import React from "react";
import { coinsConfig } from "../../../config/config.js";

const DashCoins = () => {
  return (
    <div className="flex flex-col col-span-1 space-y-4">
      {coinsConfig.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="bg-[#2C2C32] flex justify-around items-center rounded-lg py-6 grow"
          >
            <div className="flex gap-4 items-center text-[22px]">
              <Icon />

              <h1 className="text-[#90909F]"> {item.label} </h1>
            </div>
            <div>
              <p className="text-[#FFFFFF]"> {item.value} </p>
              <p className="text-[#7F7F90]">{item.usd}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashCoins;
