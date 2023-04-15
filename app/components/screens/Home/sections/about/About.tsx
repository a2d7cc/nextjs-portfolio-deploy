import ResumeLink from '@/components/ui/ResumeLink'
import Button from '@/components/ui/form-elements/Button'
import { fadeIn } from '@/utils/Animate/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Link as LinkScroll } from 'react-scroll'

const About: FC = () => {
	const [ref, inView] = useInView({
		threshold: 0.2,
	})

	return (
		<section id="about" className="section pb-8 md:py-16 lg:py-40" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col xl:justify-center xl:justify-end gap-y-10 xl:flex-row  xl:gap-x-20 lg:gap-y-0">
					{/* img */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: true, amount: 0.3 }}
						className="max-sm:mt-8 lg:-mt-32 flex justify-center "
						/* className="flex-1 bg-[url('/images/analysis.svg')] bg-contain bg-no-repeat h-[740px] mix-blend-lighten bg-top" */
					>
						<Image src="/images/analysis.svg" width="700px" height="700px" />
					</motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: true, amount: 0.3 }}
						className="flex-1 text-center lg:text-left"
					>
						<h2 className="h2 text-accent -mt-16 md:-mt-24 lg:-mt-12 md:text-6xl  lg:text-4xl text-3xl">
							About me.
						</h2>
						<h3 className="h3 mb-4 md:text-2xl text-xl">
							I'm a Full-Stack Developer with 2 years of experience.
						</h3>
						<p className="my-12 lg:my-4 text-sm md:text-base lg:text-xl">
							On the server side, I started developing on frameworks based on
							PHP programming language like Yii2, Laravel, and used PostgreSQL
							as a relational database. Later I used a bunch of Laravel and Vue
							to develop Full-Stack applications, but at the moment I switched
							to JS and used modern technology stack as Nest.js for server side
							and Next.js for client side, which used React library to develop
							user interfaces. 
						</p>
						<p className="my-12 lg:my-4 text-sm md:text-base lg:text-xl">
							For the client side I use the Tailwind library
							and give preference to SVG format for displaying icons, graphics
							and only for complex collages and compositing I give preference to
							raster formats jpeg, png, webp When writing HTML code I pay
							attention to semantics code on the standards of HTML 5 and when
							writing styles practice the mobile first approach, checking the
							adaptability of the layout on different devices For design I use
							Photoshop, Illustrator, Figma, trying to choose interesting fonts
							and think about the accessibility of the interface and ease of
							reading information. Also I am fond of 3d modeling using Blender
							for stylistic projects and 3d max for architecture and interiors,
							but it's more like a hobby. However, in future projects I am
							interested in implementing 3D graphics through Three.js framework
							for branded and stylistic projects.
						</p>
						<p className="my-12 lg:my-4 text-sm md:text-base lg:text-xl">	
							 Also in the near future I
							would like to improve my skills by studying Deploy projects via
							Docker, Ansible, as well as microservice architecture development
							with code test coverage.
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-10 my-8  lg:justify-start justify-center">
							<div>
								<div className="text-[40px] font-tertialy text-gradient mb-2">
									{inView ? <CountUp start={0} end={2} duration={3} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Years of <br />
									Experience
								</div>
							</div>

							<div>
								<div className="text-[40px] font-tertialy text-gradient mb-2">
									{inView ? <CountUp start={0} end={5} duration={3} /> : null}+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Projects
									<br />
									Completed
								</div>
							</div>

							{/* 							<div>
								<div className="text-[40px] font-tertialy text-gradient mb-2">
									{inView ? <CountUp start={0} end={3} duration={3} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Satisfied
									<br />
									Clients
								</div>
							</div> */}
						</div>
						<div
							className="flex gap-x-8 items-center
						justify-between md:justify-center lg:justify-start  max-sm:mx-0 max-sm:flex-col max-sm:mb-6
						"
						>
							<Button
								className="btn 
														lg:btn-lg
														md:hidden
														lg:block
														max-sm:mb-4
														lg:mb-0
										"
							>
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
							<ResumeLink className="text-2xl md:text-4xl lg:text-xl" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About
