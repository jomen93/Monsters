import React, { useState } from "react";
import { logo, logo_login, hamburguer } from "../assets"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    return (
        <div className="w-full h-[80px] bg-white border-b">
            <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
                
                <img src={logo} className="h-[55px]"/>
                
                <div className="hidden md:flex items-center">
                    <ul className="flex gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                    </ul>
                </div>

                <div className="hidden md:flex">
                    <button className="flex justify-between items-center bg-transparent px-6 gap-2">
                        <img src={logo_login} className="h-[20px]"/>
                        Login
                    </button>
                    <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">Sign up for Free</button>
                </div>

                <div className="md:hidden" onClick={handleClick}>
                    <img src={toggle?close:hamburguer} className="h-[20px]" />
                </div>
            </div>

            <div className={toggle?"absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b":"hidden"}>
                <ul>
                    <li className="p-4 hover:bg-gray-100">Home</li>
                    <li className="p-4 hover:bg-gray-100">About</li>
                    <li className="p-4 hover:bg-gray-100">Support</li>
                    <li className="p-4 hover:bg-gray-100">Platform</li>
                    <li className="p-4 hover:bg-gray-100">Pricing</li>
                    <div className="flex flex-col my-4 gap-4">
                        <button className="border border-[20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-2">
                            <img src={logo_login} className="h-[20px]"/>
                            Login
                        </button>
                    <button className="px-8 py-2 rounded-md bg-[#20B486] text-white font-bold">Sign up for Free</button>
                    </div>
                </ul>
            </div>

        </div>
    );
}

export default Navbar;
