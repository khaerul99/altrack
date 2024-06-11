import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Preloader from "../components/preloader";

function Layout({ children }) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000); // Simulate 3 seconds loading time
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {loading && <Preloader />} */}
      <Preloader/>
      {/* {!loading && ( */}
        <>
          <div className=" bg-[#0F0F0F]">
            <div className="flex justify-center bg-[#0F0F0F]">
              <div className="w-[1280px] max-w-7xl">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </>
      {/* )} */}
    </>
  );
}

export default Layout;
