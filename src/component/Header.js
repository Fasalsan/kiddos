import React, { useState } from 'react'
import { GiBookCover } from "react-icons/gi";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { IoReorderThreeSharp } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { IoMdClose } from "react-icons/io";
const navItem = [
  {
    id: 1,
    title: "Home",
    link: '/'
  },
  {
    id: 2,
    title: "About",
    link: '/about'
  },
  {
    id: 3,
    title: "Teacher",
    link: '/teacher'
  },
  {
    id: 4,
    title: "Courses",
    link: '/courses'
  },
  {
    id: 5,
    title: "Pricing",
    link: '/pricing'
  },
  {
    id: 6,
    title: "Blog",
    link: '/blog'
  },
  {
    id: 7,
    title: "Contact",
    link: '/contact'
  },
]

export default function Header() {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className='sticky top-0 z-50'>
        <div className='bg-[#0287a8] ms:flex flex-col lg:flex-row gap-3 justify-between py-2 text-white lg:block hidden z-50'>
          <div className=' container '>
            <div className='flex flex-col lg:flex-row gap-3 justify-between py-2 text-white'>
              <div className='flex gap-2 items-center'>
                <GiBookCover className='text-[30px] text-white bg-purple-600 p-1 rounded-full' />
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='flex gap-2 items-center'>
                <MdMarkEmailUnread className='text-[30px] text-white bg-red-600 p-1 rounded-full' />
                <p>demo123@gmail.com</p>
              </div>
              <div className='flex gap-2 items-center'>
                <MdPhoneIphone className='text-[30px] text-white bg-green-600 p-1 rounded-full' />
                <p>+855 81 567 015</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white flex justify-between items-center h-24 w-full md:px-12 px-4 mx-auto py-4 text-white shadow-xl'>
          {/* Logo */}
          <h1 className='w-full text-3xl font-bold text-[#0287a8]  m-4'>KIDDOS</h1>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex gap-6'>
            {
              navItem && navItem.map((d, i) => {
                return (
                  <div key={i}>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? 'text-[#0287a8] border-b-2 border-[#0287a8] p-1 font-bold' : 'hover:border-b-2 border-[#0287a8] text-black p-1'
                        }
                        to={d.link}>{d.title}</NavLink>
                    </li>
                  </div>
                )
              })
            }
          </ul>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose className='text-[30px] text-black cursor-pointer' /> : <AiOutlineMenu className='text-[30px] text-black cursor-pointer' />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? 'fixed md:hidden left-0 top-0 w-[70%] h-full bg-[#0287a8] ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            {/* Mobile Logo */}
            <h1 className='w-full text-3xl font-bold text-white  m-4'>KIDDOS</h1>

            {/* Mobile Navigation Items */}
            <div className='flex flex-col gap-6 px-4 py-3 text-[18px] '>
              {
                navItem && navItem.map((d, i) => {
                  return (
                    <div key={i}>
                      <li>
                        <NavLink
                          onClick={handleNav}
                          className={({ isActive }) =>
                            isActive ? 'text-green-500 border-b-2 border-[#0287a8] p-1 font-bold' : 'hover:border-b-2 border-white  p-1'
                          }
                          to={d.link}>{d.title}</NavLink>
                      </li>
                    </div>
                  )
                })
              }
            </div>
          </ul>
        </div>
      </div >
    </>
  )
}
