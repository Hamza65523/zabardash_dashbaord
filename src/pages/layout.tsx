import Home from "@/screens/Home";
import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
const Layout = () => {
  return (
    <div className="   w-full h-full">
      <div className="flex border-t border-lightgray  w-full h-full">
        {/* Sidebar*/}
        <Sidebar />
        <div className="w-full h-full">
          <div className="w-full h-full">
            {/* Header-Topbar */}
            <Header />
            {/* Main*/}
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
