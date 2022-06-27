import React, { useEffect, useState } from "react";
import school from "../Images/Vector.png";
import Sidebar from "./Sidebar";

const Home = () => {
  const [sidebars, setSidebars] = useState([]);

  useEffect(() => {
    async function Data() {
      const fetchData = await fetch("./fakeData.json");
      const res = await fetchData.json();
      console.log(res);
      setSidebars(res);
    }
    Data();
  }, []);

  return (
    <div>
      <div class="drawer drawer-mobile">
        
      <input id="dashboard_Sidebar" type="checkbox" className="drawer-toggle" />

        <div class="drawer-side border border-radius drop-shadow-2xl menu overflow-y-auto w-80 bg-base-100 text-base-content">
          <div className="flex items-center my-12">
            <img
              className="bg-[#FFBF3F] px-4 py-2 rounded-lg ml-12 mr-4"
              src={school}
              alt=""
            />
            <p className="text-2xl font-bold text-[#2CA4D8]">School Space</p>
          </div>
          <p className="border border-[#D3D6DB] border-solid w-60 h-0 ml-8"></p>
          <div>
            {sidebars.map((sidebars) => (
              <Sidebar sidebars={sidebars}></Sidebar>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
