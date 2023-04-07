import { FC } from 'react'
import { Link as LinkScroll } from 'react-scroll'

import Button from '@/components/ui/form-elements/Button'

const Header: FC = () => {
	return (
		<div id="home" className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* Logo */}
					{/* <a href="#">
						<img src={logo.src}></img>
					</a> */}
					<a href="#" className="text-gradient btn-link text-3xl">
						Alex Chukrii
					</a>
					{/* Button */}
					<Button className="btn btn-sm">
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
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Header
