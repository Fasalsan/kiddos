import React from 'react'
import { TfiCommentAlt } from "react-icons/tfi";
import { MdArrowRightAlt } from "react-icons/md";
import DataBlog from '../jsonfile/DataBlog';


const imgBg = "https://img.freepik.com/free-photo/little-girl-participating-online-classes-home_23-2149041085.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724457600&semt=ais_hybrid"

export default function Blog() {
  console.log(DataBlog)
  return (
    <div>

      <div>
        <img src={imgBg} alt="" className='w-full h-[400px] object-cover ' />
        <div className='absolute bottom-80 right-[700px]'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <h1 className='text-[50px] font-bold text-white'>Blogs</h1>
          </div>
        </div>
      </div>

      {/* BLogCards */}

      <div className='grid grid-cols-4 gap-7 p-7'>

        {
          DataBlog && DataBlog.map((data, i) => {
            return (
              <div key={i}>
                <div className='group hover:shadow-xl w-[350px]'>
                  <div className='relative w-[350px] overflow-hidden'>
                    <img
                      className='w-[350px] group-hover:scale-110 transition-all duration-500'
                      src={data.image} alt="" />
                    <div className='absolute bottom-0'>
                      <div className='bg-primary p-2 text-white'>
                        <div>
                          
                        </div>
                        <h1 className='font-semibold text-[26px]'>{data.date.day}</h1>
                        <p>{data.date.month}</p>
                        <p>{data.date.year}</p>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col gap-3 p-4'>
                    <h1 className='font-medium group-hover:text-primary duration-200 ease-linear'>{data.title}</h1>
                    <p>{data.discription}</p>

                    <div className='flex justify-between items-center'>
                      <div >
                        <button className='bg-gray-500 px-4 py-2 rounded-full text-white bg-opacity-50 hover:bg-primary duration-200 ease-linear flex gap-1 items-center'>Read More<span><MdArrowRightAlt /></span></button>
                      </div>
                      <div className='flex gap-2'>
                        <h1 className='text-primary'>Admin</h1>
                        <div className='flex items-center gap-1'>
                          <TfiCommentAlt />
                          <p className='text-gray-500'>{data.command}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

        {/* <div className='bg-green-100 group hover:shadow-xl w-[350px]'>
          <div className='relative w-[350px] overflow-hidden'>
            <img
              className='w-[350px] group-hover:scale-110 transition-all duration-500'
              src="https://img.freepik.com/free-photo/portrait-little-girl-coloring_23-2148886429.jpg" alt="" />
            <div className='absolute bottom-0'>
              <div className='bg-blue-700 p-2 text-white'>
                <h1>27</h1>
                <p>January</p>
                <p>2019</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3 p-4'>
            <title>Skills To Develop Your Child Memory</title>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            <div className='flex justify-between items-center'>
              <div >
                <button className='bg-gray-500 px-4 py-2 rounded-full text-white bg-opacity-50 hover:bg-gray-500 duration-200 ease-linear flex gap-1 items-center'>Read More<span><MdArrowRightAlt /></span></button>
              </div>
              <div className='flex gap-2'>
                <h1 className='text-primary'>Admin</h1>
                <div className='flex items-center gap-1'>
                  <TfiCommentAlt />
                  <p className='text-gray-500'>50</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className='bg-green-100'>
          <div className='relative'>
            <img
              className='w-full'
              src="https://img.freepik.com/free-photo/portrait-little-girl-coloring_23-2148886429.jpg" alt="" />
            <div className='absolute bottom-0'>
              <div className='bg-blue-700 p-2 text-white'>
                <h1>27</h1>
                <p>January</p>
                <p>2019</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 p-4'>
            <title>Skills To Develop Your Child Memory</title>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            <div className='flex justify-between items-center'>
              <button>Read More</button>
              <div className='flex gap-2'>
                <h1>Admin</h1>
                <div className='flex items-center gap-1'>
                  <TfiCommentAlt />
                  <p className='text-gray-500'>50</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-green-400 p-4'>
          <div>
            <img
              className='w-[400px]'
              src="https://img.freepik.com/free-photo/portrait-little-girl-coloring_23-2148886429.jpg" alt="" />
          </div>
          <div className='flex flex-col gap-3'>
            <title>Skills To Develop Your Child Memory</title>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            <div className='flex justify-between items-center'>
              <button>Read More</button>
              <div className='flex gap-2'>
                <h1>Admin</h1>
                <h1>Icons</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-green-400 p-4'>
          <div>
            <img
              className='w-[400px]'
              src="https://img.freepik.com/free-photo/portrait-little-girl-coloring_23-2148886429.jpg" alt="" />
          </div>
          <div className='flex flex-col gap-3'>
            <title>Skills To Develop Your Child Memory</title>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            <div className='flex justify-between items-center'>
              <button>Read More</button>
              <div className='flex gap-2'>
                <h1>Admin</h1>
                <h1>Icons</h1>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
