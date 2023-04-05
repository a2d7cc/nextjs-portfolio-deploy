export interface ISkill {
	id: number
	slug: string
	title: string
	description: string
	body: string
}

export interface ISkillInput extends Omit<ISkill, 'id'> {}
