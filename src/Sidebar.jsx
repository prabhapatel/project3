import { useState } from 'react';
import logo from './image/logo.png'
import { MdDashboard } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { SiAppium } from "react-icons/si";
import { FaShoppingBasket } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { FaJediOrder } from "react-icons/fa";
import { FaFaceGrinStars } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
function Sidebar() {
    const [open, setOpen] = useState(true);
    return (
    <>
            <div className='flex'>
                <div className={`${open ? "w-52" : "w-24"} duration-300 bg-slate-400 h-screen relative`}>
                    <FaArrowLeft className={`absolute cursor-pointer rounded-full -right-2 top-5 w-5 border-2
                                    border-green-700 text-white ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)} />
                    <div className='flex mt-2 '>
                        <img src={logo} className='h-8 '></img>
                        <h1 className={`pl-3 mt-1 text-white font-bold ${!open && "hidden"}`}>X_ECOM</h1>
                    </div>
                    <div className='flex cursor-pointer  hover:bg-white rounded-md mt-10'>
                        <div>
                            <MdDashboard className=' text-2xl text-white ' />
                        </div>
                        <div>
                            <h1 className={`text-white pl-5 ${!open && "scale-0"}`}>Dashboard</h1>
                        </div>
                    </div>

                    <div className='flex cursor-pointer hover:bg-white rounded-md mt-10'>
                        <div>
                            <FaUserSecret className='text-2xl text-white' />
                        </div>
                        <div>
                            <h1 className={` text-white pl-5 ${!open && "scale-0"} `}>Users</h1>
                        </div>
                    </div>

                    <div className='flex  hover:bg-white rounded-md mt-10'>
                        <div>
                            <MdCategory className='text-2xl text-white' />
                        </div>
                        <div>
                            <h1 className={`text-white pl-5 ${!open && "scale-0"}`}>Categories</h1>
                        </div>
                    </div>

                    <div className='flex  hover:bg-white rounded-md border-spacing-x-36 mt-10'>
                        <div><SiAppium className='text-2xl text-white' />
                        </div>
                        <div>
                            <h1 className={`text-white pl-5 ${!open && "scale-0"}`}>Subcategies</h1>
                        </div>
                    </div>

                    <div className='flex  hover:bg-white rounded-md mt-10'>
                        <div>
                            <FaShoppingBasket className='text-2xl text-white' />
                        </div>
                        <div>
                            <h1 className={`text-white pl-5 ${!open && "scale-0"}`}>Retailers</h1>
                        </div>
                    </div>

                    <div className='flex  hover:bg-white rounded-md mt-10'>
                        <div>
                            <FaProductHunt className='text-2xl text-white' />
                        </div>
                        <div>
                            <h1 className={`text-white pl-5 ${!open && "scale-0"}`}>Products</h1>
                        </div>
                    </div>

                    <div className='flex  hover:bg-white rounded-md mt-10'>
                        <div>
                            <FaJediOrder className='text-2xl text-white' />
                        </div>
                        <div>
                            <h1 className={` text-white pl-5 ${!open && "scale-0"}`}>Orders</h1>
                        </div>
                    </div>

                    <div className='flex  hover:bg-white rounded-md mt-10'>
                        <div>
                            <FaFaceGrinStars className='text-2xl text-white' />
                        </div>
                        <div>
                            <h1 className={`text-white pl-5 ${!open && "scale-0"}`}>Offers</h1>
                        </div>
                    </div>
                </div>
                </div>
            </>
            )
}

            export default Sidebar