import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import styles from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ navItem: INavItem }> = ({
	navItem: { link, title },
}) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link href={link}>
				<a className={cn({ [styles.active]: asPath === link })}>{title}</a>
			</Link>
		</li>
	)
}

export default AdminNavItem
