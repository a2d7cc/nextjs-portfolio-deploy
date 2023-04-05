export interface ISkills {
	id: number
	slug: string
	title: string
	description: string
	body: string
}

export interface IArticleInput extends Omit<ISkills, 'id'> {}
