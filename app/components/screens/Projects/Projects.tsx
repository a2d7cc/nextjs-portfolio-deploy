import { FC } from 'react'
import { useProjects } from './useProjects'
import styles from './projects.module.scss'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'
import Link from 'next/link'
import { IProject } from '@/shared/types/projects.type'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'

interface IProjectPage {
	projects: IProject[]
}

const Projects: FC<IProjectPage> = ({ projects }) => {
	const router = useRouter()

	return (
		<div className="">
			<div>
				<button
					className="lg:text-4xl xl:text-5xl text-2xl mr-4"
					onClick={() => router.back()}
				>
					<FaArrowLeft />
				</button>
				<span className="text-gradient lg:text-5xl xl:text-7xl md:text-4xl  sm:text-4xl text-3xl md:leading-relaxed lg:leading-relaxed leading-relaxed">
					List of projects				</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 py-8 md:py-8 lg:py-12">
				{projects.map((project, index) => {
					return (
						<Link key={project.title} href={project.link || ''}>
							<div
								key={project.id}
								className="group relative overflow-hidden cursor-pointer border-2 border-white/50 rounded-xl"
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
				})}
			</div>
		</div>
	)
}

export default Projects
