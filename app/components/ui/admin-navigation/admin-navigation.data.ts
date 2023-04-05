import { getAdminHomeUrlLink, getAdminUrlLink } from '@/configs/url.config'
import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: getAdminHomeUrlLink(),
	},
	{
		title: 'Projects',
		link: getAdminUrlLink('projects'),
	},
	{
		title: 'Skills',
		link: getAdminUrlLink('articles'),
	}
]
