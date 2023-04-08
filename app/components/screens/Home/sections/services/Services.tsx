import { motion } from 'framer-motion'
import { FC } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

import Button from '@/components/ui/form-elements/Button'

import { fadeIn } from '@/utils/Animate/variants'
import { services } from './services.data'
import { useSkills } from './useSkills'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Link from 'next/link'


const Services: FC = () => {
	const {isLoading, data} = useSkills()

	return (
		<section id="services" className="section">
			<div className="container mx-auto">
				<motion.div
					variants={fadeIn('right', 0.3)}
					initial="hidden"
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className="flex flex-col lg:flex-row"
				>

					<div
						className="
					flex-1 
					mb-12
					lg:mb-0
					"
					>
						<h2 className="h2 text-accent mb-6">What i do.</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							I'm a freelancer Front-end Developer with over 5 years of
							experience.
						</h3>
						<Link href='/projects'>
						<button className="btn btn-sm">View all projects</button>
						</Link>
					</div>
					{/* services */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						{isLoading ?
						<SkeletonLoader count={1} height={48} className="mt-4" /> :
						(data?.map((service, index) => {
							const { title, description, link } = service
							return (
								<div
									className="border-b border-white/20 h-[186px] mb-[38px] flex"
									key={index}
								>
									<div className="max-w-[476px]">
										<h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
											{title}
										</h4>
										<p className="font-secondary leading-tight">
											{description}
										</p>
									</div>
									<div className="flex flex-col flex-1 items-end">
										<a
											className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
											href="#"
										>
											<BsArrowUpRight />
										</a>
										
											<Link  className="text-gradient text-sm" href={link}>
											<a className="text-gradient text-sm" href="">Learn more</a>
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
