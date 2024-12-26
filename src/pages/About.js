import React from 'react'
import { GrShieldSecurity } from "react-icons/gr";


export default function About() {
  return (
    <div>
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
                <button className='bg-primary text-white py-3 px-7 rounded-2xl'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
