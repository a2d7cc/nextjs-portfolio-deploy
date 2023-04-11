import { motion } from 'framer-motion'
import { FC } from 'react'
import { FaDribbble, FaGithub, FaGoogle, FaInstagram, FaMailBulk, FaMailchimp, FaYoutube } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'

import Button from '@/components/ui/form-elements/Button'


import { fadeIn } from '@/utils/Animate/variants'
import Image from 'next/image'
import ResumeLink from '@/components/ui/ResumeLink'

const Banner: FC = () => {
	return (
		<section className="flex items-center">
			<div className="container mx-auto">
				<div className="flex lg:justify-between lg:pt-10 flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* text */}
					<div className="flex-1 text-center font-scondary lg:text-left">
											{/* image */}
					<div
						className=" lg:hidden flex-1"
					>
					<Image 
						src="/images/hands.svg"
						width="500px"
						height="500px"
					/>
					</div>
						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className="mb-6 
							lg:text-7xl
							max-[600px]:text-5xl max-[500px]:text-4xl
							 max-[600px]:mt-12 max-[500px]:mt-0
							 md:text-7xl
							 font-secondary font-semibold uppercase leading-[1]"
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
							viewport={{ once: true, amount: 0.7 }}
							className="mb-8  max-w-lg mx-auto lg:mx-0
							lg:text-xl
							text-sm
								md:text-xl							
							"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							corporis voluptate saepe omnis totam, cumque architecto adipisci.
						</motion.p>
						<motion.div
							variants={fadeIn('up', 0.6)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className="flex lg:flex-row lg:max-w-max gap-x-6 items-center mb-12 md:mb-8 mx-auto lg:mx-0 
							lg:mt-12
							md:justify-center
							flex-col mb-6
							lg:mb-4"
						>
							<Button className="btn 
							lg:btn-lg
							md:hidden
							lg:block
							mb-6
							lg:mb-0
							">
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
							<ResumeLink className="text-3xl md:text-4xl lg:text-2xl" />
						</motion.div>
						{/* socials */}
						<motion.div
							variants={fadeIn('up', 0.7)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className="flex lg:pl-4 text-4xl lg:text-3xl md:text-4xl gap-x-6 max-w-max mx-auto
					lg:mx-0"
						>
							<a href="#">
								<FaInstagram />
							</a>
							<a href="#">
								<FaGoogle />
							</a>
							<a href="#">
								<FaGithub />
							</a>

						</motion.div>
					</div>

					{/* image */}
					<motion.div
						variants={fadeIn('down', 0.5)}
						initial="hidden"
						whileInView={'show'}
						className="hidden lg:block lg:flex justify-end flex-1"
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
