import React from "react";
import logo from "../assets/logo.png"; // Importing images from assets
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

const Home = () => {
    return (
        <>
            {/* Header section */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-500 to-white p-4">
                <div className="flex ml-4">
                    <img src={logo} alt="logo" className="w-9 h-9" /> {/* Using the imported images */}
                    <div className="flex justify-center ml-auto">
                        <img src={image1} alt="image1" className="w-9 h-9 rounded-full" />
                        <img src={image2} alt="image2" className="w-9 h-9 rounded-full" />
                        <img src={image3} alt="image3" className="w-9 h-9 rounded-full" />
                    </div>
                </div>
                <div className="pt-20 ml-4">
                    <h1 className="text-3xl font-bold text-white opacity-50 mb-0">Hello there.</h1>
                    <p className="text-3xl font-bold text-white">How can we help?</p>
                </div>

                {/* Recent message section */}
                {/* This section displays recent messages */}
                <section className="rounded-lg bg-white p-2">
                    <h2 className="text-base font-bold m-2">Recent message</h2>
                    <div className="flex ml-2 mb-0 relative">
                        <img src={image1} alt="image1" className="w-9 h-9 rounded-full" />
                        <div className="ml-2">
                            <p className="text-sm mb-0">No problem. Just chat in below if you...</p>
                            <p className="text-sm text-gray-400">Intercom - 1h ago</p>
                        </div>
                        <i className="fa-solid fa-angle-right text-blue-600 text-xs absolute right-4 top-4"></i>
                    </div>
                </section>

            </div>

            <div className="p-4 mb-16">
                {/* Link to chat page */}
                {/* This section contains a link to the chat page */}
                <Link to="/chat" className="no-underline text-black">
                    <section className="rounded-lg p-2 bg-white outline outline-1 outline-gray-300 flex items-center relative cursor-pointer">
                        <div className="m-2 mb-0">
                            <h2 className="text-base font-bold mb-0">Send us a message</h2>
                            <p className="text-sm mb-1">We typically reply in a few minutes</p>
                        </div>
                        <i className="fa-solid fa-play absolute right-6 text-blue-600"></i>
                    </section>
                </Link>

                {/* Help options */}
                {/* This section contains options for seeking help */}
                <section className="rounded-lg p-2 bg-white outline outline-1 outline-gray-300 relative mt-4">
                    <div className="text-sm">
                        <Link to="/help" className="no-underline text-black">
                            <div className="flex bg-slate-100 rounded-lg relative p-1">
                                <p className="font-bold m-2">Search for help</p>
                                <i className="fa-solid fa-magnifying-glass absolute right-4 top-4 text-blue-600"></i>
                            </div>
                        </Link>

                        <div className="flex rounded-lg relative mt-2 p-1">
                            <p className="m-2">Send custom user attributes to Intercom</p>
                            <i className="fa-solid fa-angle-right text-blue-600 text-xs absolute right-5 top-3"></i>
                        </div>

                        <div className="flex rounded-lg relative p-1">
                            <p className="m-2">Tickets explained</p>
                            <i className="fa-solid fa-angle-right text-blue-600 text-xs absolute right-5 top-3"></i>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Home;
