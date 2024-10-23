import React from 'react'
import {assets} from "../assets/assets";
const Footer = () => {
  return (
    <div>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-32 text-sm'>
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
            At BuyMe, we believe that fashion is more than just clothing—it's a way to express yourself. Our mission is to bring you the latest styles, handpicked for quality and designed to suit every occasion. Whether you're looking for trendy, timeless, or something uniquely you, we’ve got you covered. We’re passionate about offering affordable, high-quality clothing that helps you feel your best every day.
            <br />
            <br />
           <span className='text-gray-700 font-medium'>Shop with us and discover fashion that fits your lifestyle.</span>
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>9182148907</li>
                <li>buttaakhil70@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Coypright 2024 Butta Akhil - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
