import { FC } from 'react'

import AdminActions from './AdminActions/AdminActions'
import { IAdminTableItem } from './AdminTable.interface'
import styles from './AdminTable.module.scss'

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={() => removeHandler(tableItem.id)}
			/>
		</div>
	)
}

export default AdminTableItem
