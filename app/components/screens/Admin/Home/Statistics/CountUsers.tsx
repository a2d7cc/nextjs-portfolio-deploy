import SkeletonLoader from '@/components/ui/SkeletonLoader'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../Admin.module.scss'
import { UserService } from '@/services/user.service'

const CountUsers: FC = () => {
	const { isLoading, data: users } = useQuery('Count users', () =>
		UserService.getCountUsers()
	)

	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<div className={styles.infoUserContainer}>
						<div className={styles.number}>{users?.data}</div>
						<div className={styles.description}>users</div>
					</div>
				)}
				<Image
					width={200}
					height={200}
					src="/uploads/default-user.svg"
					alt="Icon of user"
					className={styles.image}
					unoptimized
				/>
			</div>
		</div>
	)
}

export default CountUsers
