import React, { useEffect, useState } from "react";
import school from "../Images/Vector.png";
import profile from "../Images/profile.png";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

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
        <input
          id="dashboard_Sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>

        <div class="drawer-side border drop-shadow-2xl  w-80 bg-base-100 ">
          <div className="flex items-center my-1">
            <img
              className="bg-[#FFBF3F] px-4 py-2 rounded-lg ml-12 mr-4"
              src={school}
              alt=""
            />
            <p className="text-2xl font-bold text-[#2CA4D8]">School Space</p>
          </div>
          <hr className=" border-[#D3D6DB] border-solid w-60  ml-8" />
          <div>
            {sidebars.map((sidebars) => (
              <Sidebar sidebars={sidebars}></Sidebar>
            ))}
          </div>
          <div className="text-left p-4">
            <img src={profile} alt="" />
            <p className="font-semibold">Andy Samberg</p>
            <p className="text-gray-400">andy.samberg@gmail.com</p>
            <button className="text-center btn-white text-[#2CA4D8] border border-[#2CA4D8] border-2 w-full rounded-lg mt-4 uppercase">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
