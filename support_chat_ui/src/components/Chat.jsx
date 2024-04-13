import React from "react";
import logo from "../assets/logo.png"; // Importing images from assets
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

const Chat = () => {
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

            {/* This section displays a message indicating an online status */}
            <div className='flex justify-center mt-3'>
                <p className='text-center text-xs font-semibold opacity-70 w-[19rem] md:w-full'>Our ReOps Executive Ramesh is online and he will take care of your queries</p>
            </div>

            <div className='mx-4 mt-1 h-screen'>
                <div className='flex flex-col'>
                    {/* Chat messages */}
                    <div className='flex justify-start mb-2'>
                        <div className="text-blue-500 text-sm font-semibold rounded-md px-2 py-1 border-[1.5px] border-blue-500">
                            Hi Rahul, How can I help you?
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

export default Chat;
