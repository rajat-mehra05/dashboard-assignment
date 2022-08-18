import React from "react";
import CustomBar from "../../bars/CustomBar";

const DashCardRight = () => {
  return (
    <div className="flex flex-col space-y-4 col-span-1">
      <div className="bg-[#2C2C32] rounded-lg h-[115px] flex flex-col justify-center items-center">
        <h1 className="text-[#6E6E6E] text-[22px]"> Total Balance </h1>
        <p className="text-[#FFFFFF] text-[30px]"> ₹ 4585563 </p>
      </div>

      <div className="bg-[#2C2C32] rounded-lg flex flex-col p-8 gap-4">
        <h1 className="text-white"> Top most </h1>
        <div className="grid grid-cols-4 gap-8">
          <CustomBar activeCount={20} isFullActiveCells />
          <CustomBar activeCount={3} />
          <CustomBar activeCount={11} />
          <CustomBar activeCount={6} />
        </div>
      </div>
    </div>
  );
};

export default DashCardRight;
