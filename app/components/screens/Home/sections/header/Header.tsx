import { FC } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { motion } from 'framer-motion'
import Button from '@/components/ui/form-elements/Button'
import { FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa'
import { fadeIn } from '@/utils/Animate/variants'

const Header: FC = () => {
	return (
		<div id="home" className="py-8 ">
			<div className="container mx-auto">
				<div className="flex justify-between items-center max-[600px]:justify-center ">
					{/* Logo */}
					{/* <a href="#">
						<img src={logo.src}></img>
					</a> */}
					<a href="#" className="text-gradient btn-link 
					text-3xl
					lg:text-4xl 
					md:text-5xl
					max-[600px]:text-6xl
					max-[500px]:text-5xl
">
						Alex Chukrii
						
					</a>
					{/* Button */}
					<button className="btn btn-sm md:btn-lg lg:btn-md rounded-xl py-4 max-[600px]:hidden">
						<LinkScroll
							to="contact"
							activeClass="active"
							key="sdf34rf"
							smooth={true}
							spy={true}
							hashSpy={true}
							isDynamic={true}
							offset={50}
						>
							Contact me
						</LinkScroll>
					</button>
				</div>

			</div>
		</div>
	)
}

export default Header
