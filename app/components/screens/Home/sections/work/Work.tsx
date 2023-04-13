import { motion } from 'framer-motion'
import { FC } from 'react'

import { fadeIn } from '@/utils/Animate/variants'

import Button from '@/components/ui/form-elements/Button'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { useProjects } from './useProjects'
import Link from 'next/link'
import { IProject } from '@/shared/types/projects.type'

const Work: FC<{projects: IProject[]}> = ({projects}) => {
	/* const { isLoading, data } = useProjects() */
	const primary = projects[0]
	const secondary = projects.slice(1, 4)

	return (
		<section id="work" className="section">
			<div className="container mx-auto">
				{/* Work Describe with main project */}
				<div className="flex-1 flex flex-col lg:flex-row lg:justify-between gap-x-12 gap-y-12 mb-10  lg:mb-10
				max-[600px]:mb-5">
					{/* text */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: true, amount: 0.1 }}
						className="text-center lg:text-left lg:max-w-xl"
					>
						<h2 className="h2 leading-tight text-accent md:text-6xl md:mb-10 lg:text-5xl">
							My Latest <br />
							Work
						</h2>
						<p className="mb-4 md:mb-8 text-sm md:text-xl lg:text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
							totam dolores nemo debitis qui tempora. Maxime, perspiciatis
							architecto. Nihil nesciunt quasi doloribus excepturi eius
							consequatur ab quis, doloremque modi pariatur!
						</p>
						
						<Link href='/projects'>
						<button className="btn btn-sm
						mt-4 md:btn-lg lg:btn-sm
						">View all projects</button>
						</Link>
						
					</motion.div>

					{/* Projects */}
					{
						primary? 
											<Link href={primary?.link || ''}>
						<motion.div
							variants={fadeIn('left', 0.3)}
							initial="hidden"
							key={primary?.id}
							whileInView={'show'}
							viewport={{ once: true, amount: 0.02 }}
							className="lg:basis-2/4 shrink group relative overflow-hidden cursor-pointer border-2 border-white/50 rounded-xl"
						>
							
							
							{/* overlay */}
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							{/* img */}
							<img
								className="group-hover:scale-125 transition-all duration-500 lg:max-w-[180%] lg:max-w-[130%]"
								src={primary?.poster}
								alt="Image of project in section 'Projects'"
							/>
							{/* pretitle */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">{primary?.subTitle}</span>
							</div>
							{/* Title */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
								<span className="text-3xl text-white">
									{primary?.title}
								</span>
							</div>
							
						</motion.div>
					</Link> :
					null
					}
				</div>

				{/* Projects */}
				<motion.div
					variants={fadeIn('right', 0.3)}
					initial="hidden"
					whileInView={'show'}
					viewport={{ once: true, amount: 0.1 }}
					className="flex-1 flex flex-col lg:flex-row gap-4"
				>
					{/* Projects */}
					{
						secondary.map((project, index) => {
							return (
								<Link key={project.title} href={project.link || ''}>
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
					}
					
				</motion.div>
			</div>
		</section>
	)
}

export default Work
