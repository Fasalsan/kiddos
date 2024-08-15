import React from 'react'

export default function NoPage() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black bg-opacity-40'>

      <div className='flex flex-col gap-2 items-center'>
        <h1 className='text-[150px] font-medium text-red-500'>404</h1>
        <p className='text-red-500'>Page Not Found</p>
      </div>

    </div>
  )
}
