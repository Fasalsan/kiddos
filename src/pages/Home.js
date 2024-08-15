import React from 'react'
import { FaFemale } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { GiBookAura } from "react-icons/gi";
import Card from '../jsonfile/Card';


export default function Home() {
  console.log(Card)
  return (
    <div className='w-full bg-[#f7f7f7]'>
      <div >
        <div>
          <img src="https://media.istockphoto.com/id/1144235214/photo/children-reading.jpg?s=612x612&w=0&k=20&c=ZT2gaasdr5EypvaSmq8si_guyIRZ1Gml0bjHWF4hMt0=" alt="" className='w-full h-[600px] bg-center ' />

          <div className='absolute bottom-80 right-[600px]'>
            <h1 className='text-[30px] font-bold'>Wellcom to new schools </h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className='grid md:grid-cols-4 grid-cols-1 gap-3 place-items-center  w-full px-3 py-9 text-white'>

          {
            Card && Card.map((data, i) => {
              return (
                <>
                  <div className='relative bg-[#f1453d] flex justify-center py-12 px-4 hover:shadow-2xl'>
                    <div className='bg-white p-7 rounded-full absolute top-[-50px] shadow-xl'>
                      <div className='text-[40px] text-primary '>
                        {data.icon}
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center text-center'>
                      <h1 className='font-bold text-[24px]'>{data.title}</h1>
                      <p>{data.dis}</p>
                    </div>
                  </div>
                </>
              )
            })
          }

          {/* <div className='group'>
            <div className='relative bg-[#1eaaf1] flex justify-center py-12 px-4 hover:shadow-2xl '>
              <div className='bg-white group-hover:bg-[#1eaaf1] duration-300  p-7 rounded-full absolute top-[-50px] shadow-xl '>
                <FaFemale className='text-[40px] text-primary group-hover:text-white duration-300' />
              </div>
              <div className='flex flex-col gap-3 items-center justify-center text-center'>
                <h1 className='font-bold text-[24px]'>Certified Teachers</h1>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
          </div>

          <div className='relative bg-[#8cc152] flex justify-center py-12 px-4 hover:shadow-2xl'>
            <div className='bg-white text-primary p-7 rounded-full absolute top-[-50px] shadow-xl'>
              <MdOutlineMenuBook className='text-[40px] text-primary' />
            </div>
            <div className='flex flex-col gap-3 items-center justify-center text-center'>
              <h1 className='font-bold text-[24px]'>Book & Library</h1>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>

          <div className='group relative bg-[#5d50c6] flex justify-center py-12 px-4 hover:shadow-2xl'>
            <div className='bg-white text-primary p-7 rounded-full absolute top-[-50px] shadow-xl group-hover:bg-primary group-hover:text-white'>
              <GiBookAura className='text-[40px] text-primary' />
            </div>
            <div className='flex flex-col gap-3 items-center justify-center text-center'>
              <h1 className='font-bold text-[24px]'>Book & Library</h1>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>


          <div className='relative bg-[#f1453d] flex justify-center py-12 px-4 hover:shadow-2xl'>
            <div className='bg-white p-7 rounded-full absolute top-[-50px] shadow-xl'>
              <GrCertificate className='text-[40px] text-primary ' />
            </div>
            <div className='flex flex-col gap-3 items-center justify-center text-center'>
              <h1 className='font-bold text-[24px]'>Certified Teachers</h1>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div> */}


        </div>
      </div>



      {/* offer */}
      <div className='py-20'>
        <h1>Wellcome New Web</h1>
      </div>

    </div>
  )
}
