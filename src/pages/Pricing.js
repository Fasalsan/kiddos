import React from 'react'
import DataPricing from '../jsonfile/DataPricing'

export default function Pricing() {
  return (
    <div className='px-4 py-12'>
      <div className='flex flex-col gap-4 justify-center items-center text-center'>
        <div className='md:w-[50%]'>
          <h1 className='font-semibold text-[30px]'>OUR <span className='text-orange-500'>Pricing</span></h1>
          <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
        </div>

      </div>

      {/* card */}
      <div>
        <div className='grid md:grid-cols-4 gap-4 py-7'>

          {
            DataPricing && DataPricing.map((data, i) => {
              return (
                <div className='border w-[350px] h-[500px]'>
                  <div className='flex flex-col gap-4 px-2 py-4 items-center'>
                    <h1 className='font-semibold text-[20px]'>{data.title}</h1>
                    <label htmlFor="" className='font-extrabold text-[34px] text-primary'>${data.price}<span className='font-normal text-[12px] text-gray-600'>/{data.month}</span></label>
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/indian-students-study-abroad-042542-16x9.jpg?VersionId=FwNlOHzpLRhOzUykSjkzLd_0rbrG6IV2" alt="" />
                    <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div>
                      <button className='w-fit bg-primary px-7 py-4 rounded-full text-white'>{data.titleBtn}</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
