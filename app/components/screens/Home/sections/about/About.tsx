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
		threshold: 0.5,
	})

	return (
		<section id="about" className="section lg:pt-56" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col lg:justify-center lg:justify-end gap-y-10 lg:flex-row  lg:gap-x-20 lg:gap-y-0">
					{/* img */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: true, amount: 0.3 }}
						className='max-[600px]:mt-8 lg:-mt-32 flex justify-center '
						/* className="flex-1 bg-[url('/images/analysis.svg')] bg-contain bg-no-repeat h-[740px] mix-blend-lighten bg-top" */
					>
						<Image 
						src="/images/analysis.svg"
						width="700px"
						height="700px"
					/>
					</motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: true, amount: 0.1 }}
						className="flex-1 text-center lg:text-left"
					>
						<h2 className="h2 text-accent lg:mt-12-mt-16 md:text-6xl  lg:text-4xl text-3xl">About me.</h2>
						<h3 className="h3 mb-4 md:text-2xl text-xl">
							I'm a freelancer Front-end Developer with over 5 years of
							experience.
						</h3>
						<p className="my-12 lg:my-4 text-sm md:text-base">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
							numquam totam voluptate, dicta nemo, maiores nostrum quo
							praesentium optio, veritatis neque eaque exercitationem dolorem
							sit voluptatem. Fugit cupiditate architecto libero?
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-10 my-8  lg:justify-start md:justify-center">
							<div>
								<div className="text-[40px] font-tertialy text-gradient mb-2">
									{inView ? <CountUp start={0} end={13} duration={3} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Years of <br />
									Experience
								</div>
							</div>

							<div>
								<div className="text-[40px] font-tertialy text-gradient mb-2">
									{inView ? <CountUp start={0} end={15} duration={3} /> : null}
									k+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Projects
									<br />
									Completed
								</div>
							</div>

							<div>
								<div className="text-[40px] font-tertialy text-gradient mb-2">
									{inView ? <CountUp start={0} end={43} duration={3} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Satisfied
									<br />
									Clients
								</div>
							</div>
						</div>
						<div className="flex gap-x-8 items-center
						justify-between lg:justify-start  max-[600px]:mx-0 max-[600px]:flex-col max-[600px]:mb-6
						">
							<Button className="btn btn-lg 
							max-[600px]:mb-6
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
								</LinkScroll >
							</Button>
							<ResumeLink className="text-3xl lg:text-xl" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About
