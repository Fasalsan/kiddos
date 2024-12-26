import React from 'react'
import { GrShieldSecurity } from "react-icons/gr";
import Card from '../jsonfile/Card';
import DataTeacher from '../jsonfile/DataTeacher';
import Pricing from './Pricing';
import Courses from './Courses';

export default function Home() {
  console.log(DataTeacher)

  const cardStyle = 'group relative flex justify-center py-12 px-4 hover:shadow-2xl';

  return (
    <div className='w-full h-fit bg-[#f7f7f7]'>
      <div >
        <div>
          <img src="https://i.pinimg.com/originals/4b/5e/a7/4b5ea77816de6baf215d3f35e6f882b0.gif" alt="" className='w-full md:h-[600px] bg-center ' />

          <div className='absolute bottom-72 right-[500px]'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <h1 className='text-[50px] font-bold text-black'>Wellcom to new schools </h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className='px-12 py-3 bg-primary text-white rounded-full'>Contact Us</button>
            </div>
          </div>
        </div>



        <div className='grid md:grid-cols-4 grid-cols-1 gap-3 place-items-center  w-full px-3 py-9 text-white'>

          {
            Card && Card.map((data, i) => {
              return (
                <div key={i}>
                  <div className={`${cardStyle} ${i === 0 ? 'bg-[#1eaaf1]' : ''} ${i === 1 ? 'bg-[#8cc152]' : ''} ${i === 2 ? 'bg-[#5d50c6]' : ''} ${i === 3 ? 'bg-[#f1453d]' : ''} hover:scale-105 duration-200 ease-linear`}>
                    <div className='bg-white group-hover:bg-primary p-7 rounded-full absolute top-[-50px] shadow-xl'>
                      <div className='text-[40px] text-primary  group-hover:text-white'>
                        {data.icon}
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center text-center'>
                      <h1 className='font-bold text-[24px]'>{data.title}</h1>
                      <p>{data.dis}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* offer */}
      <div className='py-4 w-full'>
        <div className='flex md:flex-row flex-col w-full gap-6'>
          {/* what we offer */}
          <div className='flex flex-col gap-7 md:w-[200%]  p-2'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-[30px] font-semibold'>What We Offer</h1>
              <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-12 md:px-12'>

              <div className='flex gap-3'>
                <div className='bg-blue-500 p-6  rounded-full'>
                  <GrShieldSecurity className='text-[30px] text-white' />
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-semibold md:text-[20px]'>Safety First</h1>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>

              <div className='flex gap-3'>
                <div className='bg-blue-500 p-6 rounded-full'>
                  <GrShieldSecurity className='text-[30px] text-white' />
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-semibold text-[20px]'>Regular Classes</h1>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='bg-blue-500 p-6 rounded-full'>
                  <GrShieldSecurity className='text-[30px] text-white' />
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-semibold text-[20px]'>Certified Teachers</h1>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>

              <div className='flex gap-3'>
                <div className='bg-blue-500 p-6 rounded-full'>
                  <GrShieldSecurity className='text-[30px] text-white' />
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-semibold text-[20px]'>Sufficient Classrooms</h1>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>

              <div className='flex gap-3'>
                <div className='bg-blue-500 p-6 rounded-full'>
                  <GrShieldSecurity className='text-[30px] text-white' />
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-semibold text-[20px]'>Creative Lessons</h1>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>

              <div className='flex gap-3'>
                <div className='bg-blue-500 p-6 rounded-full'>
                  <GrShieldSecurity className='text-[30px] text-white' />
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-semibold text-[20px]'>Sports Facilities</h1>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
            </div>
          </div>
          {/* wellcome to kiddos Learning School */}
          <div className='w-full'>
            <div className='flex gap-4 flex-col p-3'>
              <h1 className='text-[30px] font-semibold'>Welcome to Kiddos Learning School</h1>
              <div className='flex gap-2 flex-col'>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.</p>
              </div>
              <div>
                <button className='bg-primary text-white py-3 px-7 rounded-full'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certified Teachers */}
      <div>
        <div className='flex flex-col gap-4 justify-center items-center text-center px-4'>
          <div className='md:w-[50%]'>
            <h1 className='font-semibold text-[30px]'>Certified <span className='text-orange-500'>Teachers</span></h1>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>

        {/* card */}

        <div className='pb-12 w-full h-fit px-7'>
          <div className='grid md:grid-cols-4 gap-7 pt-7 w-full'>
            {
              DataTeacher && DataTeacher.map((data, i) => {
                return (
                  <>
                    <div className='group border w-full md:w-[300px] hover:shadow-2xl'>
                      <div className="md:w-[300px] h-[200px]  overflow-hidden">
                        <img className="group-hover:scale-125 transition-all duration-500 cursor-pointer w-[300]" src={data.img} alt="" />
                      </div>
                      <div className='flex flex-col justify-center items-center text-center pt-1'>
                        <h1 className='text-[24px] font-bold'>{data.title}</h1>
                        <h1 className='uppercase font-semibold text-gray-300 group-hover:text-primary duration-200 ease-out'>{data.role}</h1>
                        <div className='px-2 pb-6 text-center'>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis beatae laudantium eos nemo magni unde, sint, eius deleniti accusamus debitis id fuga quia pariatur quis? Illum quasi repellat id.</p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>

      <div>
        <Courses />
      </div>
      <div>
        <Pricing />
      </div>
    </div >
  )
}
