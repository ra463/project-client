// import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ show }: { show: boolean }) => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  let page = "";
  if (currentUrl.includes("add")) {
    page = "add";
  } else {
    page = "home";
  }
  return (
    <>
      <div className="w-80 h-svh bg-primary h-xll md:hidden">
        <h4
          className={`m-1 p-2 cursor-pointer hover:bg-input transition duration-200 ease-out ${
            page === "home" ? "bg-btn" : "bg-input"
          }`}
          onClick={() => navigate("/")}
        >
          All Product's
        </h4>
        <h4
          className={`m-1 p-2 cursor-pointer hover:bg-input transition duration-200 ease-out ${
            page === "add" ? "bg-btn" : "bg-input"
          }`}
          onClick={() => navigate("/add/add-product")}
        >
          Add Product
        </h4>
      </div>
      <div
        className={`w-60 h-svh bg-primary h-xll hidden md:block md:absolute transition-all duration-200 ease-out ${
          show ? "left-0" : "-left-full"
        }`}
      >
        <h4
          className={`m-1 p-2 cursor-pointer hover:bg-input transition duration-200 ease-out ${
            page === "home" ? "bg-btn" : "bg-input"
          }`}
          onClick={() => navigate("/")}
        >
          All Product's
        </h4>
        <h4
          className={`m-1 p-2 cursor-pointer hover:bg-input transition duration-200 ease-out ${
            page === "add" ? "bg-btn" : "bg-input"
          }`}
          onClick={() => navigate("/add/add-product")}
        >
          Add Product
        </h4>
      </div>
    </>
  );
};

export default Sidebar;
