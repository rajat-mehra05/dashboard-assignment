import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import DashboardLayout from "./components/dashboardLayout/DashboardLayout";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { baseURL } from "./services/api.js";

function App() {
  useEffect(() => {
    const handleApiCall = async () => {
      const res = await axios.get(
        `${baseURL}v1/exchangerate/USD?apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(res);
    };
    handleApiCall();
  }, []);

  return (
    <div className="font-noto">
      <main className="flex">
        <Sidebar />
        <div className="w-full flex flex-col bg-[#222227]">
          <Header />
          <DashboardLayout />
        </div>
      </main>
    </div>
  );
}

export default App;
