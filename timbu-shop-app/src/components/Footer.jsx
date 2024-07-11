import React from 'react';
import { Link } from 'react-router-dom'
import { FiPhone, FiMail } from 'react-icons/fi';
import { TfiLocationPin } from "react-icons/tfi";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { PiTiktokLogo } from "react-icons/pi";

const Footer = () => {
  return (
	<>
    <div className="lg:flex justify-between bg-[#2C3E50] text-white py-10 px-5">
		<div className='flex flex-row items-center mb-3'>
			<img src="/velte-logo.png" alt="" />
			<h1 className="font-bold">Velte Beauty</h1>
		</div>
		
		<div>
			<p className='mb-4 font-semibold'>Links</p>
			<ul className='leading-7 font-semibold text-[16px] mb-4'>
				
				<Link to='/'>
				<li>Home</li>
				</Link>
				
				<Link to='/cart'>
				<li>Shop</li>
				</Link>

				<Link to='/cart'>
				<li>Cart</li>
				</Link>
			</ul>		
		</div>

		<div>
			<p className='font-semibold mb-4'>Contact</p>	
			<div className='flex gap-4 mb-4'><FiPhone /><p>09012345678</p></div>
			<div className='flex gap-4 mb-4'><FiMail /><p className='font-semibold text-[16px]'>veltebeauty@gmail.com</p></div>
			<div className='flex gap-4'><TfiLocationPin /><p className='font-normal text-[16px] leading-5'>Unity Quarters, Orita Obele Estate, Road Block, <br/>Akure, Ondo State</p></div>
		</div>
	</div>

	<div className='text-left p-10 bg-[#2C3E50] text-white font-normal text-[16px]'>
		<div className='flex justify-center gap-5 m-5'>
			<TiSocialFacebookCircular />
			<SlSocialInstagram />
			<HiOutlineMail />
			<PiTiktokLogo />
		</div>

		<p className='pt-3 border-t'>2024 Velte Beauty. All right reserved</p>
	</div>
	</>
  )
}

export default Footer