import React, { useState } from "react";
import { Link } from "react-router-dom";

function Stiky() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div
      className={`fixed bg-gray-200 h-14 w-14 rounded-full bottom-10 right-5 z-[55] ${
        isPopupOpen ? "open" : ""
      }`}
    >
      <div className="flex justify-center items-center h-full">
        <button onClick={togglePopup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>
        </button>
        <div
          className={`popup bg-white border border-gray-300 p-5 w-60 rounded absolute bottom-16 right-16 shadow-lg ${
            isPopupOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <div className=" flex flex-col gap-2">
            <Link to={"https://www.facebook.com/profile.php?id=61560526673687&mibextid=ZbWKwL"}>
              <div className="flex items-center mb-2">
                <img
                  src="assets/icons/facebook.png"
                  alt="Social Media Icon 1"
                  className="w-6 h-6 mr-2"
                />
                <span>Gps tracker</span>
              </div>
            </Link>
            <Link to={"https://www.instagram.com/alifnk27/?utm_source=ig_web_button_share_sheet"}>
            <div className="flex items-center mb-2">
              <img
                src="assets/icons/instagram.png"
                alt="Social Media Icon 2"
                className="w-6 h-6 mr-2"
              />
              <span>Alifnk27</span>
            </div>
            </Link>
            <Link to={"https://wa.me/628817724742"}>
            <div className="flex items-center">
              <img
                src="assets/icons/whatsapp.png"
                alt="Social Media Icon 3"
                className="w-6 h-6 mr-2"
              />
              <span>08817724742</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Stiky;
