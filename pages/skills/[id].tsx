import LayoutClient from '@/components/layouts/client/LayoutClient'
import Skill from '@/components/screens/Skill/Skill'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const SkillPage: NextPageAuth = () => {
	return <LayoutClient><Skill /></LayoutClient>
}


export default SkillPage
