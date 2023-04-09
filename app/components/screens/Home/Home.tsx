import { FC } from 'react'

import { IHome } from './home.interface'
import About from './sections/about/About'
import Banner from './sections/banner/Banner'
import Contact from './sections/contact/Contact'
import Header from './sections/header/Header'
import Services from './sections/services/Services'
import Work from './sections/work/Work'
import Meta from '@/providers/HeadProvider/Meta/Meta'

const Home: FC<IHome> = ({projects, skills}) => {
	return (
		<Meta
			title="Portfolio"
			description="Welcome to my personal developer website!"
		>
			<Header />
			<Banner />
			<About />
			<Services skills={skills} />
			<Work projects={projects} />
			<Contact />
		</Meta>
	)
}

export default Home
