import { motion } from 'framer-motion'
import { FC } from 'react'
import { FaDribbble, FaGithub, FaYoutube } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'

import Button from '@/components/ui/form-elements/Button'


import { fadeIn } from '@/utils/Animate/variants'
import Image from 'next/image'

const Banner: FC = () => {
	return (
		<section className="min-h-[85vh] lg:min-h-[75vh] flex items-center">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* text */}
					<div className="flex-1 text-center font-scondary lg:text-left">
						<motion.h1
							variants={fadeIn('up', 0.3)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[65px] font-bold leading-[0.8] lg:text-[90px]"
						>
							{/* ALEX <span>CHUKRII</span> */}
						</motion.h1>
						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
						>
							<span className="text-white mr-4">
								I am a <br />
							</span>
							<TypeAnimation
								sequence={['Frontend', 2000, 'Backend', 2000]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
							Developer
						</motion.div>
						<motion.p
							variants={fadeIn('up', 0.5)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8  max-w-lg mx-auto lg:mx-0"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							corporis voluptate saepe omnis totam, cumque architecto adipisci.
						</motion.p>
						<motion.div
							variants={fadeIn('up', 0.6)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="flex  max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
						>
							<Button className="btn btn-lg">
								<LinkScroll
									to="contact"
									activeClass="active"
									key="sdf34rf"
									smooth={true}
									spy={true}
									hashSpy={true}
									isDynamic={true}
									offset={0}
								>
									Contact me
								</LinkScroll>
							</Button>
							<a href="#" className="text-gradient btn-link">
								My portfolio
							</a>
						</motion.div>
						{/* socials */}
						<motion.div
							variants={fadeIn('up', 0.7)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="flex text-[20px] gap-x-6 max-w-max mx-auto
					lg:mx-0"
						>
							<a href="#">
								<FaYoutube />
							</a>
							<a href="#">
								<FaGithub />
							</a>
							<a href="#">
								<FaDribbble />
							</a>
						</motion.div>
					</div>

					{/* image */}
					<motion.div
						variants={fadeIn('down', 0.5)}
						initial="hidden"
						whileInView={'show'}
						className="hidden lg:flex flex-1"
					>
					<Image 
						src="/images/hands.svg"
						width="600px"
						height="600px"
					/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Banner
