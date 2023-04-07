import Button from '@/components/ui/form-elements/Button'
import { fadeIn } from '@/utils/Animate/variants'
import { motion } from 'framer-motion'
import { FC } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Link as LinkScroll } from 'react-scroll'

const About: FC = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})

	return (
		<section id="about" className="section" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row  lg:gap-x-20 lg:gap-y-0 h-screen">
					{/* img */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-[url('/images/analysis.svg')] bg-contain bg-no-repeat h-[740px] mix-blend-lighten bg-top"
					></motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">About me.</h2>
						<h3 className="h3 mb-4">
							I'm a freelancer Front-end Developer with over 5 years of
							experience.
						</h3>
						<p className="mb-6">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
							numquam totam voluptate, dicta nemo, maiores nostrum quo
							praesentium optio, veritatis neque eaque exercitationem dolorem
							sit voluptatem. Fugit cupiditate architecto libero?
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-10 mb-12">
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
						<div className="flex gap-x-8 items-center">
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
								My Portfolio
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About
