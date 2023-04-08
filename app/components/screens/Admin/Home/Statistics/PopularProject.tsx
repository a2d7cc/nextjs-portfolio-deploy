import SubHeading from '@/components/ui/heading/SubHeading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../admin-home.module.scss'
import { ProjectService } from '@/services/project.service'
import { getProjectsUrlLink } from '@/configs/url.config'

const PopularProject: FC = () => {
	const { isLoading, data: project } = useQuery(
		'Most popular articles',
		() => ProjectService.getAll(),
		{
			select: (data) => data.data[0],
		}
	)

	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="The most popular" />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				project && (
					<>
						<SubHeading title={project.title}/>
						<Link href={getProjectsUrlLink(project.slug)}>
							<a className="mt-4">
								<Image
									width={160}
									height={160}
									src={project.poster}
									alt={project.title}
									className={project.poster}
									unoptimized
								/>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularProject
