import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import {motion} from "framer-motion";
import { useSelector } from "react-redux";


const HeaderBottom = () => {

    const userInfo = useSelector((state) => state.amazon.userInfo);
    const ref = useRef();

    const [sideBar, setSideBar] = useState(false);

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if(e.target.contains(ref.current)){
                setSideBar(false);
            }
        })
    },[ref, sideBar])

  return (
    <div className="w-full px-4 h-[36px] font-titleFont text-sm bg-amazon_light text-white flex items-center gap-2">
        <ul className='flex items-center gap-2 text-sm tracking-wide'>
            <li onClick={() => setSideBar(true)} className='headerHover flex items-center gap-1'>
                <MenuIcon />
                All
            </li>
            <li className='headerHover hidden md:inline-flex'>Today's Deals</li>
            <li className='headerHover hidden md:inline-flex'>Customer Service</li>
            <li className='headerHover hidden md:inline-flex'>Gift Cards</li>
            <li className='headerHover hidden md:inline-flex'>Registry</li>
            <li className='headerHover hidden md:inline-flex'>Sell</li>
        </ul>

        {/*--------- Side-Bar  --------*/}
        {
            sideBar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className='w-[80%] md:w-[350px] h-full bg-white border border-black'>

                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                {userInfo ? (
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src={userInfo.image}
                                        alt="UserImg"
                                    />
                                ) : (
                                    <AccountCircleIcon />
                                )}
                                {
                                    userInfo ? (
                                        <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                                            {userInfo.userName}
                                        </h3>
                                    ) : (
                                        <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                                            Hello, Sign In
                                        </h3>
                                    )
                                }
                            </div>

                            <SideNavContent
                                title="Trending"
                                one="Best Sellers"
                                two="New Releases"
                                three="Movers & Shakers"
                            />

                            <SideNavContent
                                title="Digital Content & Devices"
                                one="Amazon Music"
                                two="Kindle E-readers & Books"
                                three="Amazon Appstore"
                            />

                            <SideNavContent 
                                title="Shop By Department"
                                one="Electronics"
                                two="Computers"
                                three="Smart Home"
                            />

                            <SideNavContent 
                                title="Programs & Features"
                                one="Gift Cards"
                                two="Amazon Live"
                                three="International Shopping"
                            />

                            <SideNavContent 
                                title="Help & Setting"
                                one="Your Account"
                                two="Customer Service"
                                three="Contect us"
                            />

                            <span onClick={() => setSideBar(false)} className='cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300'> 
                                <CloseIcon /> 
                            </span>

                        </motion.div>

                        
                    </div>
                </div>
            )
        }

    </div>
  )
}

export default HeaderBottom