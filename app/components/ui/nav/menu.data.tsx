import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs'

export const bottomMenu = [
	{
		icon: <BiHomeAlt />,
		to: 'home',
		offset: -50,
	},
	{
		icon: <BiUser />,
		to: 'about',
		offset: -50,
	},
	{
		icon: <BsClipboardData />,
		to: 'services',
		offset: -50,
	},
	{
		icon: <BsBriefcase />,
		to: 'work',
		offset: -50,
	},
	{
		icon: <BsChatSquareText />,
		to: 'contact',
		offset: -50,
	},
]
