import { FC, PropsWithChildren } from 'react'
import styles from './layout-client.module.scss'
import cn from 'classnames'
import Nav from '@/components/ui/nav/Nav'

const LayoutClient: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			{/* 			<Navigation /> */}
			<Nav />
			<div className={cn("bg-[url('/images/site-bg.jpg')] bg-no-repeat bg-cover", styles.layoutClient)}>
				{children}
			</div>
		</>
	)
}

export default LayoutClient
