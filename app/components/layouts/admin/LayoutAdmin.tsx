import { FC, PropsWithChildren } from 'react'
import styles from './layout-admin.module.scss'

const LayoutAdmin: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
				<div className={styles.layoutAdmin}>{children}</div>
		</>
	)
}

export default LayoutAdmin
