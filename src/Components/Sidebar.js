import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = ({sidebars}) => {
    const {img, name, link} = sidebars;
    return (
        <div className={name === "Students" ? "active" : ""}>
            <Link className="flex items-center h-12" to={link}>
              <img
                className=" px-4 rounded-lg ml-4 mr-1"
                src={img}
                alt=""
              />
              <p className=" font-bold text-[#2CA4D8]">{name}</p>
              </Link>
        </div>
    );
};

export default Sidebar;