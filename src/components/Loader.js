import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { loaderVariants } from '../constants/variants';


const Loader = () => {
	const [animation, cycleAnimation] = useCycle(
		'animationOne',
		'animationTwo',
	);

	return (
		<>
			<motion.div
				variants={loaderVariants}
				animate={animation}
        className='loader'>
      </motion.div>
      <div onClick={() => cycleAnimation()} className='cycleBtn'>Cycle Loader</div>
		</>
	);
};

export default Loader;
