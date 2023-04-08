import { FC, PropsWithChildren } from 'react'
import styles from './layout-client.module.scss'
import cn from 'classnames'
import Nav from '@/components/ui/nav/Nav'

interface IClient {
	isNav?: boolean
}

const LayoutClient: FC<PropsWithChildren & IClient> = ({ children, isNav=false}) => {
	return (
		<>
			{/* 			<Navigation /> */}
			{isNav? <Nav /> : null}
			<div className={cn("bg-[url('/images/site-bg.jpg')] bg-no-repeat bg-cover", styles.layoutClient)}>
				{children}
			</div>
		</>
	)
}

export default LayoutClient
