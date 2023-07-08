import React from 'react';
import { motion } from 'framer-motion';
import { svgVariants, pathVariants } from '../constants/variants';
const Header = () => {
	return (
		<header>
			<div className='logo'>
				<motion.svg
					variants={svgVariants}
					initial='hidden'
					animate='visible'
					className='pizza-svg'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 100 100'>
					<motion.path
						variants={pathVariants}
						fill='none'
						d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
					/>
					<motion.path
						variants={pathVariants}
						fill='none'
						d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z'
					/>
				</motion.svg>
			</div>
			<motion.div
				initial={{ y: -250 }}
				animate={{ y: -10 }}
				transition={{
					delay: 0.2,
					type: 'spring',
					duration: 1.5,
					stiffness: 120,
				}}
				className='title'>
				<h1>Pizza Joint</h1>
			</motion.div>
		</header>
	);
};

export default Header;
