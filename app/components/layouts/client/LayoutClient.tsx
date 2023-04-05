import { FC, PropsWithChildren } from 'react'
import styles from './layout-client.module.scss'

const LayoutClient: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			{/* 			<Navigation /> */}
			{/* <Nav /> */}
			<div className={styles.layout}>
				{children}
			</div>
		</>
	)
}

export default LayoutClient
