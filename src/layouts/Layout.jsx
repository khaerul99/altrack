import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Preloader from "../components/preloader";

function Layout({ children }) {
  return (
    <>
    <Preloader/>
    <div className="flex justify-center bg-[#0F0F0F]">
      <div className="w-[1280px] max-w-7xl">
        <Navbar/>
        <div>{children}</div>
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default Layout;
