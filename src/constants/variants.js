export const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			mass: 0.4,
			damping: 8,
			when: 'beforeChildren',
			staggerChildren: 0.4,
		},
	},
	exit: {
		x: '-100vw',
		transition: {
			ease: 'easeInOut',
		},
	},
};

export const svgVariants = {
	hidden: {
		rotate: -180,
	},
	visible: {
		rotate: 0,
		transition: {
			duration: 1,
		},
	}
}

export const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: 'easeInOut',
		},
	},
};

export const loaderVariants = {
	animationOne: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				yoyo: Infinity,
				duration: 0.5,
			},
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: 'easeOut',
			},
		},
	},
	animationTwo: {
		y: [0, -40],
		x: 0,
		transition: {
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: 'easeOut',
			},
		},
	},
};

export const componentContainerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1.5,
			duration: 1.5,
		},
	},
	exit: {
		x: '-100vw',
		transition: {
			ease: 'easeInOut',
		},
	},
};

export const childsVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 120,
		},
	},
};

export const nextVariants = {
	hidden: {
		x: '-100vw',
	},
	visible: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 120,
		},
	},
};

export const backdropVariants = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
};

export const modalVariants = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '200px',
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
};

export const buttonVariants = {
	hover: {
		scale: 1.1,
		textShadow: '0px 0px 8px rgb(255,255,255)',
		boxShadow: '0px 0px 8px rgb(255,255,255)',
		transition: {
			duration: 0.3,
			yoyo: Infinity,
		},
	},
};
