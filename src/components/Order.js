import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, childsVariants } from '../constants/variants';

const Order = ({ pizza, setShowModal }) => {

	useEffect(() => {
		setTimeout(() => {
			setShowModal(true);
		}, 5000);
	}, [setShowModal]);
	

	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='container order'>
			<motion.h2 exit={{ y: -1000 }}>
				Thank you for your order{' '}
				<span role='img' aria-label='Pizza'>
					🍕
				</span>{' '}
				:)
			</motion.h2>

			<motion.p variants={childsVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div variants={childsVariants}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Order;
