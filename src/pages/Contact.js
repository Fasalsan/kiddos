import React from 'react'
import DataContact from '../jsonfile/DataContact'

const imgBg = "https://epe.brightspotcdn.com/dims4/default/f615efb/2147483647/strip/true/crop/3406x2311+0+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2F53%2F66%2Fb17323e84e668e02e25d5b4a7a93%2Fteacher-students-classroom.jpg";

const styleInput = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const map = "https://i.gyazo.com/3b3a347a30a2cb3bf5882df5c29c9bf8.png";


export default function Contact() {
  const handleSendMessage = () => {
    alert("Sending Message")
  }
  return (
    <div>
      <div>
        <div>
          <img src={imgBg} alt="" className='w-full h-[400px] object-cover ' />
          <div className='absolute bottom-80 right-[600px]'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <h1 className='text-[50px] font-bold text-white'>Contact Us </h1>
            </div>
          </div>
        </div>

        {/* Card */}

        <div className='py-12'>
          <div className='grid grid-cols-4 gap-4 px-4'>

            {
              DataContact && DataContact.map((item, index) => {
                return (
                  <div className='group'>
                    <div className='flex flex-col gap-3  group-hover:shadow-lg cursor-pointer p-4 '>
                      <div className='text-[26px] group-hover:text-[30px] duration-200 ease-linear group-hover:text-primary'>
                        {item.icon}
                      </div>
                      <h1 className='font-semibold text-[24px]'>{item.title}</h1>
                      <p>{item.dis}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className='py-12'>
          <div className='grid grid-cols-2 px-4'>
            <div className='py-7'>
              <img src={map} alt="" className='w-full'/>
            </div>
            <div className=' px-7 py-7'>
              <div className='flex flex-col gap-4'>
                <input type="text" placeholder='Your Name' id='Your Name' className={styleInput} required />
                <input type="text" id="Your Email" className={styleInput} placeholder="Your Email" required />
                <input type="text" id="Subject" className={styleInput} placeholder="Subject" required />
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Messages" />
                <div className='flex justify-center items-center'>
                  <button
                    onClick={handleSendMessage}
                    className='bg-primary px-6 py-4 text-white '
                  >Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
