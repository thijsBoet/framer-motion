import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
	containerVariants,
	buttonVariants,
	nextVariants,
} from '../constants/variants';

const Toppings = ({ addTopping, pizza }) => {
	let toppings = [
		'mushrooms',
		'peppers',
		'onions',
		'olives',
		'extra cheese',
		'tomatoes',
	];

	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='toppings container'>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping)
						? 'active'
						: '';
					return (
						<motion.li
							key={topping}
							onClick={() => addTopping(topping)}
							whileHover={{
								scale: 1.3,
								color: '#f8e112',
								originX: 0,
							}}
							transition={{ type: 'spring', stiffness: 300 }}>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>
			<motion.div className='next' variants={nextVariants}>
				<Link to='/order'>
					<motion.button variants={buttonVariants} whileHover='hover'>
						Order
					</motion.button>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default Toppings;
