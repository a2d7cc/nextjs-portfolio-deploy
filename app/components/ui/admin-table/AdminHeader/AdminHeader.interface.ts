import { ICategoryInput } from '@/shared/types/category.type'
import { ChangeEvent } from 'react'

export interface IAdminHeader {
	onClick?: (data: ICategoryInput) => void
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
