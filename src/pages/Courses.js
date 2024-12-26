import React from 'react'
import DataCours from '../jsonfile/DataCours'

export default function Courses() {

  return (

    <div className='px-4 py-12'>
      <div className='flex flex-col gap-4 justify-center items-center text-center'>
        <div className='md:w-[50%]'>
          <h1 className='font-semibold text-[30px]'>Certified <span className='text-orange-500'>Teachers</span></h1>
          <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
        </div>

      </div>

      {/* card */}

      <div className='grid md:grid-cols-3 gap-4 py-12 md:px-12'>

        {
          DataCours && DataCours.map((data, i) => {
            return (
              <>
                <div className='grid md:grid-cols-2 hover:border rounded-lg items-center'>
                  <div className=''>
                    <img className='object-cover h-[350px]' src={data.img} alt="" />
                  </div>
                  <div className='flex flex-col gap-4 px-4 py-4'>
                    <h1 className='text-[30px] font-semibold'>{data.title}</h1>
                    <h1 className='text-orange-400'>{data.timeTitle}<span className='text-black text-[16px]'>{data.time}</span></h1>
                    <p>{data.dis}</p>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
