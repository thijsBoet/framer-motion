import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
	backdropVariants,
	containerVariants,
	modalVariants,
} from '../constants/variants';

const Modal = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					variants={backdropVariants}
					initial='hidden'
          animate='visible'
          exit='hidden'
					className='backdrop'>
					<motion.div className='modal' variants={modalVariants} initial="hidden" animate="visible">
						<p>Want to make another pizza?</p>
						<Link to='/'>
							<button>Yes</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
