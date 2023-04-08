import { motion } from 'framer-motion'
import { FC } from 'react'

import { fadeIn } from '@/utils/Animate/variants'

import Button from '@/components/ui/form-elements/Button'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { useProjects } from './useProjects'
import Link from 'next/link'

const Work: FC = () => {
	const { isLoading, data } = useProjects()

	return (
		<section id="work" className="section">
			<div className="container mx-auto">
				{/* Work Describe with main project */}
				<div className="flex-1 flex flex-col lg:flex-row gap-x-12 gap-y-12 mb-10  lg:mb-10">
					{/* text */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.1 }}
						className="max-w-screen-sm"
					>
						<h2 className="h2 leading-tight text-accent">
							My Latest <br />
							Work.
						</h2>
						<p className="max-w-lg mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
							totam dolores nemo debitis qui tempora. Maxime, perspiciatis
							architecto. Nihil nesciunt quasi doloribus excepturi eius
							consequatur ab quis, doloremque modi pariatur!
						</p>
						
						<Link href='/projects'>
						<button className="btn btn-sm">View all projects</button>
						</Link>
						
					</motion.div>

					{/* Projects */}
					{isLoading ? (
						<SkeletonLoader count={1} height={48} className="mt-4" />
					) : data?.primary ? (
					<Link href={data?.primary.link}>
						<motion.div
							variants={fadeIn('left', 0.3)}
							initial="hidden"
							key={data.primary.id}
							whileInView={'show'}
							viewport={{ once: false, amount: 0.02 }}
							className="lg:basis-2/3 shrink group relative overflow-hidden cursor-pointer border-2 border-white/50 rounded-xl"
						>
							
							
							{/* overlay */}
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							{/* img */}
							<img
								className="group-hover:scale-125 transition-all duration-500 lg:max-w-[130%]"
								src={data.primary.poster}
								alt="Image of project in section 'Projects'"
							/>
							{/* pretitle */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">{data.primary.subTitle}</span>
							</div>
							{/* Title */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
								<span className="text-3xl text-white">
									{data.primary.title}
								</span>
							</div>
							
						</motion.div>
					</Link>

					) : null}
				</div>

				{/* Projects */}
				<motion.div
					variants={fadeIn('right', 0.3)}
					initial="hidden"
					whileInView={'show'}
					viewport={{ once: false, amount: 0.1 }}
					className="flex-1 flex flex-col lg:flex-row gap-4"
				>
					{/* Projects */}
					{isLoading ? (
						<SkeletonLoader count={1} height={48} className="mt-4" />
					) : (
						data?.secondary.map((project, index) => {
							return (
								<Link key={project.title} href={project.link}>
																	<div
									key={project.id}
									className=" shrink group relative overflow-hidden cursor-pointer border-2 border-white/50 rounded-xl"
								>
									{/* overlay */}
									<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
									{/* img */}
									<img
										className="group-hover:scale-125 transition-all duration-500"
										src={project.poster}
										alt="Image of project in section 'Projects'"
									/>
									{/* pretitle */}
									<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
										<span className="text-gradient">{project.subTitle}</span>
									</div>
									{/* Title */}
									<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
										<span className="text-3xl text-white">{project.title}</span>
									</div>
								</div>
								</Link>
							)
						})
					)}
				</motion.div>
			</div>
		</section>
	)
}

export default Work
