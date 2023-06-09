import { GrAddCircle } from "react-icons/gr";
import { FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useState } from "react";
import HeaderDropdown from "./HeaderDropdown";
import { modalState } from "../../util/atom";
import { useSetRecoilState, useRecoilValue } from "recoil";

const Header = () => {
  const openState = modalState;
  const { isOpen } = useRecoilValue(openState);
  const setIsOpen = useSetRecoilState(openState);

  const onViewAlert = () => {
    setIsOpen((prev) => {
      return { ...prev, isOpen: true, animate: true };
    });
  };

  return (
    <div className="fixed container bg-light-blue w-[395px] h-[66px] pb-[10px] pt-[10px] mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-row items-center">
        <h1 className="font-main text-black text-[32px] font-bold ml-[0px]">
          Jobtify
        </h1>
        <Link to="/add">
          <button className="bg-white w-[44px] h-[44px] ml-[140px] border-none rounded-lg flex items-center justify-center">
            <GrAddCircle size="1.4em" />
          </button>
        </Link>
        <button
          onClick={onViewAlert}
          className="bg-white w-[44px] h-[44px] ml-[12px] border-none rounded-lg flex items-center justify-center"
        >
          {localStorage.getItem("LOGGED_IN") ? (
            <FaUserCircle size="1.4em" />
          ) : (
            <FaRegUserCircle size="1.4em" />
          )}
        </button>
      </div>

      {isOpen && <HeaderDropdown onViewAlert={onViewAlert} view={isOpen} />}
    </div>
  );
};

export default Header;
