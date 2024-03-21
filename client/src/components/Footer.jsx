import React from "react";
import { logoLight } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaCreditCard,
  FaFacebookF,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPaypal, BsPersonFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-10 md:py-20 font-titleFont bottom-0'>
      <div className='max-w-screen-xl mx-10 grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-2'>
        <div className='flex flex-col gap-5'>
          <img className='w-24' src={logoLight} alt='logoLight' />
          <p className='text-white text-sm tracking-wide -mt-2'>
            ©️ www.vespi.com
          </p>
          <div className='flex items-center gap-1'>
            <FaCreditCard className='hover:text-white text-[24px] duration-300 cursor-pointer' />
            <FaCreditCard className='hover:text-white text-[24px] duration-300 cursor-pointer' />
            <FaCreditCard className='hover:text-white text-[24px] duration-300 cursor-pointer' />
            <FaCreditCard className='hover:text-white text-[24px] duration-300 cursor-pointer' />
            <FaCreditCard className='hover:text-white text-[24px] duration-300 cursor-pointer' />
          </div>
          <div className='flex gap-5 text-lg text-gray-400'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
          <div className='text-base flex flex-col gap-2'>
            <p>Masha, Surulere, Lagos</p>
            <p>Mobile: +23412345678</p>
            <p>Phone: +23400045803</p>
            <p>email: vespi@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
          <div className='flex flex-col gap-2 text-base'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <input
            type='text'
            className='bg-transparent border px-4 py-2 text-sm'
            placeholder='email'
          />
          <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
