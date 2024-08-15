import React from 'react'
import { GiBookCover } from "react-icons/gi";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
const nav = [
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
  return (
    // <div className='fixed top-0 right-0 w-full bg-white '>
    //   <div className='bg-gradient-to-r from-primary to-secondary '>
    //     <div className=' container'>
    //       <div className='flex flex-col lg:flex-row gap-3 justify-between py-2 text-white'>

    //         <div className='flex gap-2 items-center'>
    //           <GiBookCover className='text-[30px] text-white bg-purple-600 p-1 rounded-full' />
    //           <p>198 West 21th Street, Suite 721 New York NY 10016</p>
    //         </div>
    //         <div className='flex gap-2 items-center'>
    //           <MdMarkEmailUnread className='text-[30px] text-white bg-red-600 p-1 rounded-full' />
    //           <p>demo123@gmail.com</p>
    //         </div>
    //         <div className='flex gap-2 items-center'>
    //           <MdPhoneIphone className='text-[30px] text-white bg-green-600 p-1 rounded-full' />
    //           <p>+855 81 567 015</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=' bg-white shadow-lg py-4'>
    //     <div className='container'>
    //       <div className='flex justify-between items-center'>
    //         <Link>
    //           <h1 className='text-[30px] font-extrabold'>KIDDOS</h1>
    //         </Link>
    //         <ul className='flex gap-7'>
    //           {
    //             nav && nav.map((d, i) => {
    //               return (
    //                 <div key={i}>
    //                   <li>
    //                     <NavLink
    //                       className={({ isActive }) =>
    //                         isActive ? 'text-[#0287a8] border-b-2 border-[#0287a8] p-1 font-bold' : 'hover:border-b-2 border-[#0287a8] p-1'
    //                       }
    //                       to={d.link}>{d.title}</NavLink>
    //                   </li>
    //                 </div>
    //               )
    //             })
    //           }
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className='sticky top-0 z-50'>
        <div className='bg-gradient-to-r from-primary to-secondary '>
          <div className=' container'>
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

        <div className=' bg-white shadow-lg py-4'>
          <div className='container'>
            <div className='flex justify-between items-center'>
              <Link>
                <h1 className='text-[30px] font-extrabold'>KIDDOS</h1>
              </Link>
              <ul className='flex gap-7'>
                {
                  nav && nav.map((d, i) => {
                    return (
                      <div key={i}>
                        <li>
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? 'text-[#0287a8] border-b-2 border-[#0287a8] p-1 font-bold' : 'hover:border-b-2 border-[#0287a8] p-1'
                            }
                            to={d.link}>{d.title}</NavLink>
                        </li>
                      </div>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
