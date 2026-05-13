import React from 'react'
import { assets } from '../Imgg/assets'

const Contacts = () => {
  return (
    <div>
      <div className="text-center mt-10 text-2xl text-gray-500">
      <p>CONTACT <span className="text-gray-700 font-medium">US</span></p>
      </div>
      <div className='flex flex-col md:flex-row my-10 justify-center text-sm gap-10 mb-28'>
        <img className='w-full max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-gray-600 text-lg'>OUR OFFICE</p>
          <p className='text-gray-500'>00000 Willms Station <br />
          Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Tel: (000) 000-0000 <br />
          Email: greatstackdev@gmail.com</p>
          <p className='font-semibold text-gray-600 text-lg'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 hover:bg-black hover:text-white text-sm transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts
