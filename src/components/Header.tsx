import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="mx-3 py-5 shadow-xll flex justify-between">
      <div className="flex gap-3 items-center">
        <GiHamburgerMenu
          onClick={() => setShow((prev) => !prev)}
          className="xll:hidden md:block text-xl cursor-pointer"
        />
        <h3>ALL PRODUCT</h3>
      </div>
      <img
        src="https://www.pngkey.com/png/full/138-1386318_burger-logo-png.png"
        alt=""
      />
    </div>
  );
};

export default Header;
