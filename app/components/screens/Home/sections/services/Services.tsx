import { motion } from 'framer-motion'
import { FC } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

import Button from '@/components/ui/form-elements/Button'

import { fadeIn } from '@/utils/Animate/variants'
import { services } from './services.data'
import { useSkills } from './useSkills'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Link from 'next/link'
import { ISkill } from '@/shared/types/skills.type'


const Services: FC<{skills: ISkill[]}> = ({skills}) => {
	/* const {isLoading, data} = useSkills() */

	return (
		<section id="services" className="section md:mt-20 lg:mt-0">
			<div className="container mx-auto">
				<motion.div
					variants={fadeIn('right', 0.3)}
					initial="hidden"
					whileInView={'show'}
					viewport={{ once: true, amount: 0.3 }}
					className="flex flex-col lg:flex-row"
				>

					<div
						className="
					flex-1 
					mb-12
					lg:mb-0
					text-center
					lg:text-left
					"
					>
						<h2 className="h2 text-accent mb-6 md:text-6xl lg:text-4xl">What i do.</h2>
						<h3 className="h3 pr-4 mb-16 lg:mb-8 text-base max-[600px]:mb-8 md:text-2xl lg:text-xl lg:max-w-[500px]">
							I'm a Full-Stack Developer with 2 years of
							experience.
						</h3>
						<Link href='/projects'>
						<button className="btn btn-sm md:btn-lg lg:btn-sm">View all projects</button>
						</Link>
					</div>
					{/* services */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: true, amount: 0.3 }}
					>
						{

						(skills.map((service, index) => {
							const { title, description, link } = service
							return (
								<div
									className="lg:max-w-[500px] border-b border-white/20 min-h-[186px] mb-[38px] flex"
									key={index}
								>
									<div className="">
										<h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6
										md:text-5xl text-3xl lg:text-3xl
										">
											{title}
										</h4>
										<p className="pb-8 font-secondary leading-tight
										md:text-xl pr-2 md:pr-8 text-base lg:text-base
										">
											{description}
										</p>
									</div>
									<div className="flex flex-col flex-1 items-end">
										<a
											className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
											href="#"
										>
											<Link  className="text-gradient" href={link || ''}>
											<div>
											<BsArrowUpRight />
											</div>
											</Link>
											
										</a>
										
											<Link  className="text-gradient text-sm" href={link || ''}>
											<a className="text-gradient text-sm max-[600px]:hidden whitespace-nowrap
											md:text-xl lg:text-base
											" href="">Learn more</a>
											</Link>
									</div>
								</div>
							)
						}))
					}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default Services
