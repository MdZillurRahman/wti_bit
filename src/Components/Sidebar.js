import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = ({sidebars}) => {
    const {img, name, link} = sidebars;
    return (
        <div>
            <Link className="flex items-center h-16" to="/home/dashboard">
              <img
                className=" px-4 py-2 rounded-lg ml-4 mr-1"
                src={img}
                alt=""
              />
              <p className="text-2xl font-bold text-[#2CA4D8]">{name}</p>
              </Link>
        </div>
    );
};

export default Sidebar;