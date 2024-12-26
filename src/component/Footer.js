import React from 'react'
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

export default function Footer() {
    return (
        <div>
            <div className='grid md:grid-cols-4  place-items-center gap-4 bg-[#232323] md:px-20 p-4 py-7 text-white'>
                <div className='flex flex-col gap-7  text-white'>
                    <h1 className='font-semibold text-[20px]'>Have a Questions?</h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4 items-center'>
                            <FaLocationDot className='text-[24px]' />
                            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className='flex gap-4  items-center'>
                            <FaPhoneVolume className='text-[24px]' />
                            <p>+2 392 3929 210</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <MdEmail className='text-[24px]' />
                            <p>info@yourdomain.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-7  text-white'>
                    <h1 className='font-semibold text-[20px]'>Have a Questions?</h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4 items-center'>
                            <FaLocationDot className='text-[24px]' />
                            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className='flex gap-4  items-center'>
                            <FaPhoneVolume className='text-[24px]' />
                            <p>+2 392 3929 210</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <MdEmail className='text-[24px]' />
                            <p>info@yourdomain.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-7  text-white'>
                    <h1 className='font-semibold text-[20px]'>Have a Questions?</h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4 items-center'>
                            <FaLocationDot className='text-[24px]' />
                            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className='flex gap-4  items-center'>
                            <FaPhoneVolume className='text-[24px]' />
                            <p>+2 392 3929 210</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <MdEmail className='text-[24px]' />
                            <p>info@yourdomain.com</p>
                        </div>
                    </div>
                </div>

                <div className='w-full '>
                    <div className='flex flex-col gap-7  text-white'>
                        <h1 className='font-semibold text-[20px]'>Have a Questions?</h1>
                        <div className='flex flex-col gap-4'>
                            <input type="text" name="" id="" placeholder='Enter email address' className='bg-gray-500 px-4 py-4 w-full focus:border-none' />
                            <button className='bg-primary px-4 py-4 '>Subscribe</button>
                        </div>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='font-semibold text-[20px]'>Connect With Us</h1>
                                <div className='flex gap-4'>
                                    <div className='group'>
                                        <div className='bg-primary p-2 rounded-full group-hover:bg-white group-hover:text-primary duration-200 ease-in-out'>
                                            <FaTwitter className='text-[30px]' />
                                        </div>
                                    </div>
                                    <div className='group'>
                                        <div className='bg-primary p-2 rounded-full group-hover:bg-white group-hover:text-blue-700'>
                                            <FaFacebookF className='text-[30px]' />
                                        </div>
                                    </div>
                                    <div className='group'>
                                        <div className='bg-primary p-2 rounded-full group-hover:bg-white group-hover:text-primary'>
                                            <BiLogoTelegram className='text-[30px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-3 justify-center items-center text-center bg-[#232323] text-white py-12 px-4'>
                <label htmlFor="">&copy; Copyright All Rights Reserved | This template is made with TailwindCss</label>
                <p>Designed by <span className='text-primary font-bold'>Fasal_SAN</span></p>
            </div>

        </div>
    )
}
