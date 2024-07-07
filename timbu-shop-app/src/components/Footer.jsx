import React from 'react';
// import { footerNav } from "../utils/data";

const Footer = () => {
  return (
    <div className="lg:grid grid-cols-4 gap-10 bg-sky-950  text-white py-10 px-16">
			<div>
				<h1 className="font-bold text-2xl">Velte Beauty</h1>

				<p className='text-gray-300 pt-5'>Unity Quarters, Orita Obete Estate, <br /> Road Block, Akure, Ondo State</p>
			</div>

			{/* <div className='lg:flex flex-col items-center' >
				<div className="lg:relative">
					<p className="text-3xl font-bold inline-block uppercase pb-1">Links</p>
					<div className="lg:absolute bottom-0 left-0 lg:w-1/2 md:w-[50px]  w-1/5 border-b-4 border-yellow-400 "></div>
				</div>
				<ul className='space-y-5 pt-5'>
					{footerNav.map((link) => {
						const { id, url, name } = link
						return (
							<li key={id} className="flex gap-4 items-center hover:text-yellow-300">
								<Link to={url}>
									{name}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>


			<div className='lg:flex flex-col items-center pt-5 lg:pt-0' >
				<div className="lg:relative">
					<p className="text-2xl inline-block uppercase pb-1">Help</p>
					<div className="lg:absolute bottom-0 left-0 lg:w-1/2 md:w-1/5 w-1/4 border-b-4 border-yellow-400"></div>
				</div>
				<div className='lg:flex flex-col items-center' >
					<ul className='space-y-5 pt-5 '>
						<li className='hover:text-yellow-300'>
							<Link to='/mentee-register'>
								Connect to a Mentor
							</Link>
						</li>

						<li className='hover:text-yellow-300'>
							<Link to='/mentor-register'>
								Become a Mentor
							</Link>
						</li>

						<li className='hover:text-yellow-300'>
							<Link to='/'>
								Support System
							</Link>
						</li>
					</ul>
				</div>
			</div> */}
			</div>
  )
}

export default Footer