import React from "react";
import DashCardRight from "./dashcardright/DashCardRight";
import DashCoins from "./dashcoins/DashCoins";
import DashHeader from "./dashheader/DashHeader";
import DashStats from "./dashstats/DashStats";

const DashboardLayout = () => {
  return (
    <div>
      <main className="py-8 px-12 space-y-6">
        <div>
          <DashHeader />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <DashCoins />
          <DashStats />
          <DashCardRight />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
