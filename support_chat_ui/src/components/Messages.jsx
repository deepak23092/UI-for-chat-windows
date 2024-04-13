import React from "react";
import logo from "../assets/logo.png"; // Importing images from assets
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

const Messages = () => {
    return (
        <div className='relative h-screen'>
            {/* Header section */}
            <div className="App bg-gradient-to-br from-blue-950 via-blue-500 to-white p-3">
                <div className="flex justify-between mx-4">
                    <img src={logo} alt="logo" className="w-9 h-9" /> {/* Using the imported images */}
                    <div className="flex">
                        <img src={image1} alt="image1" className="w-9 h-9 rounded-full" />
                        <img src={image2} alt="image2" className="w-9 h-9 rounded-full" />
                        <img src={image3} alt="image3" className="w-9 h-9 rounded-full" />
                    </div>
                </div>

            </div>

            <div className='mx-4 mt-7 h-screen'>
                <div className="">
                    <h1 className="text-3xl font-bold opacity-50 mb-0">Hello there!</h1>
                    <Link to='/help' className="no-underline">
                        <p className="text-2xl font-bold text-blue-500">How can we help you today?</p>
                    </Link>
                </div>

                <div className='mt-4 flex flex-col'>
                    <div className='flex justify-start mb-2'>
                        <div className="text-blue-500 text-sm font-semibold rounded-md px-2 py-1 border-[1.5px] border-blue-500">
                            Study Requirement
                        </div>
                    </div>

                    <div className='flex justify-start mb-2'>
                        <div className="text-blue-500 text-sm font-semibold rounded-md px-2 py-1 border-[1.5px] border-blue-500">
                            Participant Recruitment
                        </div>
                    </div>

                    <div className='flex justify-start mb-2'>
                        <div className="text-blue-500 text-sm font-semibold rounded-md px-2 py-1 border-[1.5px] border-blue-500">
                            Pricing & Refund Policy
                        </div>
                    </div>

                    <div className='flex justify-start mb-2'>
                        <div className="text-blue-500 text-sm font-semibold rounded-md px-2 py-1 border-[1.5px] border-blue-500">
                            Verification Process
                        </div>
                    </div>

                    <div className='flex justify-start mb-2'>
                        <div className="text-blue-500 text-sm font-semibold rounded-md px-2 py-1 border-[1.5px] border-blue-500">
                            Data Privacy
                        </div>
                    </div>

                    <div className='flex justify-end mb-2'>
                        <div className="bg-gray-400 text-white text-sm font-semibold rounded-md px-2 py-1">
                            Study Requirement
                        </div>
                    </div>

                    <div className='flex justify-start mb-2'>
                        <div className="text-blue-500 text-sm font-semibold rounded-md px-2 py-1 border-[1.5px] border-blue-500">
                            How to create new Study?
                        </div>
                    </div>

                    <div className='flex justify-start mb-2'>
                        <div className="text-blue-500 text-sm font-semibold rounded-md px-2 py-1 border-[1.5px] border-blue-500">
                            Update your study requirement
                        </div>
                    </div>

                    <div className='flex justify-end mb-2'>
                        <div className="bg-gray-400 text-white text-sm font-semibold rounded-md px-2 py-1">
                            Update your study requirement
                        </div>
                    </div>
                </div>
            </div>

            {/* Send message button */}
            <div className='fixed w-full bottom-2'>
                <div className='p-4 mt-auto mb-16'>
                    <Link to="/chat" className="no-underline text-black">
                        <section className="rounded-lg p-2 bg-white outline outline-1 outline-gray-300 flex items-center relative cursor-pointer">
                            <div className="m-2 mb-0">
                                <h2 className="text-base font-bold mb-0">Send us a message</h2>
                                <p className="text-sm mb-1">We typically reply in a few minutes</p>
                            </div>
                            <i className="fa-solid fa-play absolute right-6 text-blue-600"></i>
                        </section>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Messages;
