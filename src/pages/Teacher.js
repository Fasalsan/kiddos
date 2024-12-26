import React from 'react'
import DataTeacher from '../jsonfile/DataTeacher';


export default function Teacher() {
  return (
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
                    <div className='flex flex-col justify-center items-center text-center pt-1 '>
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
  )
}
