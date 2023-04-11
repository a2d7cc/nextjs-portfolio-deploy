export interface ISkill {
	id: number
	slug: string
	title: string
	description: string
	body: string
	poster?: string
	link?: string
}

export interface ISkillInput extends Omit<ISkill, 'id'> {}
