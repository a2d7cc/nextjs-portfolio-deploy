import { ChangeEvent } from 'react'

export interface IAdminHeader {
	onClick?: (data: any) => void
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
