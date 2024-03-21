import React, { useState } from "react";
import { logoDark } from "../assets";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdOutlineCancel } from "react-icons/md";
import { ImBlog, ImBook, ImHeart, ImHome } from "react-icons/im";
import { FaShopify } from "react-icons/fa";

// import { ToastContainer, toast } from "react-toastify";

// import { FaUser, FaUserCircle } from "react-icons/fa";
// import { IoMdPlay } from "react-icons/io5";

const Header = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  console.log(userInfo);
  const [sidebar, setSidebar] = useState(false);
  // console.log(productData);
  return (
    // <div className='relative'>
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-500 font-titleFont sticky left-0 top-0 z-50'>
      <div className='max-w-screen-xl h-full  flex items-center justify-between '>
        <Link to={"/"}>
          <div className='ml-10'>
            <img src={logoDark} alt='logoDark' />
          </div>
        </Link>
        <div
          className={`lg:hidden mr-10 gap-3  ${sidebar ? "hidden" : "flex"}`}
        >
          <Link to='/cart'>
            <div className='relative'>
              <BsCart className='text-[24px]' />
              <span className='absolute w-4 bg-red-600 bottom-3 left-3 text-[12px] flex items-center justify-center font-semibold font-titleFont text-white rounded-full'>
                {productData.length}
              </span>
            </div>
          </Link>
          <GiHamburgerMenu
            onClick={() => setSidebar(true)}
            className='text-[24px]'
          />
        </div>
        {sidebar ? (
          <div className='bg-white w-[100%] h-[200vh] overflow-y-hidden flex flex-col justify-center   slide-in  text-2xl absolute px-10  pt-48  gap-20  overflow-hidden lg:hidden'>
            <div className='flex w-full justify-between items-center'>
              <img src={logoDark} alt='logoDark' />
              <MdOutlineCancel
                onClick={() => setSidebar(false)}
                className='text-[30px]'
              />
            </div>
            <div className='flex flex-col gap-10 h-20'>
              <Link to={"/"}>
                <div
                  onClick={() => setSidebar(false)}
                  className='flex items-center gap-6 border-b border-[1] border-gray-600 pb-4'
                >
                  <ImHome />
                  <h2 className='font-semibold font-bodyFont'>Home</h2>
                </div>
              </Link>
              <Link>
                <div
                  onClick={() => setSidebar(false)}
                  className='flex items-center gap-6 border-b border-[1] border-gray-600 pb-4'
                >
                  <ImBook />
                  <h2 className='font-semibold font-bodyFont'>Pages</h2>
                </div>
              </Link>
              <Link>
                <div
                  onClick={() => setSidebar(false)}
                  className='flex items-center gap-6 border-b border-[1] border-gray-600 pb-4'
                >
                  <FaShopify />
                  <h2 className='font-semibold font-bodyFont'>Shop</h2>
                </div>
              </Link>
              <Link to={"/favorites"}>
                <div
                  onClick={() => setSidebar(false)}
                  className='flex items-center gap-6 border-b border-[1] border-gray-600 pb-4'
                >
                  <ImHeart />
                  <h2 className='font-semibold font-bodyFont'>Favorite</h2>
                </div>
              </Link>
              <Link>
                <div
                  onClick={() => setSidebar(false)}
                  className='flex items-center gap-6 border-b border-[1] border-gray-600 pb-4'
                >
                  <ImBlog />
                  <h2 className='font-semibold font-bodyFont'>Blog</h2>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className='  hidden lg:flex  items-center gap-8 mr-10'>
          <ul className='flex  items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1.5px] cursor-pointer duration-300'>
              Home
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1.5px] cursor-pointer duration-300'>
              Pages
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1.5px] cursor-pointer duration-300'>
              Shop
            </li>
            <Link to={"/favorites"}>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1.5px] cursor-pointer duration-300'>
                Favorites
              </li>
            </Link>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1.5px] cursor-pointer duration-300'>
              Blog
            </li>
          </ul>
          <Link to='/cart'>
            <div className='relative'>
              <BsCart className='text-[24px]' />
              <span className='absolute w-4 bg-red-600 bottom-3 left-3 text-[12px] flex items-center justify-center font-semibold font-titleFont text-white rounded-full'>
                {productData.length}
              </span>
            </div>
          </Link>
          {/* <FaUserCircle className='text-[24px] ' /> */}
          <Link to='/login'>
            <img
              className='w-8 h-8 rounded-full'
              src={
                userInfo
                  ? userInfo?.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb8w=1260&h=750&dpr=1"
              }
              // src={userInfo.imageUrl}
              alt='userLogo'
            />
          </Link>
          {userInfo && (
            <p className='text-base font-titleFont font-semibold underline underline-offset-2'>
              {userInfo?.name}
            </p>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
