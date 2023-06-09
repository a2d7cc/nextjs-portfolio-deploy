import { FC } from 'react'

import Button from '../../form-elements/Button'

const AdminCreateButton: FC<{ onClick: (data?: any) => void }> = ({ onClick }) => {
	return (
		<Button  onClick={onClick}>
			Create new
		</Button>
	)
}

export default AdminCreateButton
