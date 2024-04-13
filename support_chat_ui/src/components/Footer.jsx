import React from "react";
import { Link, useLocation } from "react-router-dom"; // Importing Link and useLocation from react-router-dom for navigation

const Footer = () => {
    const location = useLocation(); // Using useLocation to get the current location

    return (
        <footer className="text-center p-3 flex outline outline-1 outline-gray-300 justify-around fixed bottom-0 w-full bg-white">
            {/* Link to home page */}
            <Link to="/" className={`flex flex-col ${location.pathname == "/" ? "text-blue-500" : "text-black"} no-underline`}>
                <i className="fa-solid fa-envelope-open text-xl"></i>
                <span>Home</span>
            </Link>

            {/* Link to messages page */}
            <Link to="/messages" className={`flex flex-col ${location.pathname == "/messages" ? "text-blue-500" : "text-black"} no-underline`}>
                <i className="fa-regular fa-message text-xl"></i>
                <span>Messages</span>
            </Link>

            {/* Link to help page */}
            <Link to="/help" className={`flex flex-col ${location.pathname == "/help" ? "text-blue-500" : "text-black"} no-underline`}>
                <i className="fa-regular fa-circle-question text-xl"></i>
                <span>Help</span>
            </Link>

            {/* Link to news page */}
            <Link to="/news" className={`flex flex-col ${location.pathname == "/news" ? "text-blue-500" : "text-black"} no-underline`}>
                <i className="fa-solid fa-bullhorn text-xl"></i>
                <span>News</span>
            </Link>
        </footer>
    );
};

export default Footer;
