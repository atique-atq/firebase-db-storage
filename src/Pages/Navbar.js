import React from 'react';

const Navbar = ({usersInfo}) => {
  const allMale = usersInfo?.map((item) => item.gender.toUpperCase() === 'MALE')
  const allFemale = usersInfo?.map((item) => item.gender.toUpperCase() === 'FEMALE')
  const maleCount = allMale?.length === 0 ? 25 : allMale.length;
  const femaleCount = allFemale?.length === 0 ? 25 : allFemale.length;
  const menuItems = (
        <>
        <li className="font-bold text-gray-600 ml-3 p-0">
                <p className="text-xl mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </p>           
                <p className="bg-[#92D050] rounded-none ml-3 px-7 text-black">{maleCount}</p>
                <p className="rounded-none bg-[#FF0100] ml-3 px-7 text-white">{femaleCount}</p>
      </li>
        </>
  )

    return (
    <div>
      <div className="navbar bg-[#001D7B] px-5 py-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-0 px-2 py-0 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <span className="text-xl font-bold font-serif text-[#007986]">
            <span className='text-2xl'>S</span>ECQUR<span className='text-red-500 text-2xl'>AI</span>SE
          </span>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 py-0">{menuItems}</ul>
        </div>
      </div>
    </div>
    );
};

export default Navbar;