import { FC } from 'react'
import SearchField from '../../search-field/SearchField'
import AdminCreateButton from '../AdminCreateButton/AdminCreateButton'
import { IAdminHeader } from './AdminHeader.interface'
import styles from './AdminHeader.module.scss'

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	searchTerm,
	handleSearch,
}) => {
	return (
		<div className={styles.header}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
