import React from 'react'
import Title from "../components/Title";
import {assets} from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full object-cover md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>BuyMe was born out of a passion for fashion and a desire to redefine the way people shop for clothing online. Our journey began with a single vision: to create a platform where customers can easily discover, explore, and purchase a wide range of clothing from the comfort of their homes.</p>
          <p>Since our inception, we’ve been dedicated to curating a diverse selection of high-quality apparel that suits every style, occasion, and preference. From casual wear to formal attire, our collection is sourced from trusted brands that prioritize both comfort and style.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At BuyMe, our mission is to empower customers with a seamless shopping experience built on choice, convenience, and confidence. We are committed to offering a variety of fashionable options, making it easy to find the perfect look. From browsing and ordering to delivery and beyond, we strive to exceed expectations every step of the way, ensuring that shopping for clothes is as enjoyable as wearing them.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
