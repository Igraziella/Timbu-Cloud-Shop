import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="lg:flex justify-between bg-[#2C3E50] text-white py-10 px-10">
		<div className=''>
			<img src="/velte-logo.png" alt="" />
			<h1 className="font-bold">Velte Beauty</h1>
		</div>
		
		<div>
			<p className='mb-4'>Links</p>
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
			<p className='font-semibold'>Contact</p>
			<ul>
				<li>09012345678</li>
				<li className='font-semibold text-[16px leading-9'>veltebeauty@gmail.com</li>
				<li className='font-normal text-[16px] leading-'>Unity Quarters, Orita Obele Estate, Road Block, <br />Akure, Ondo State</li>
			</ul>
		</div>

	</div>
  )
}

export default Footer