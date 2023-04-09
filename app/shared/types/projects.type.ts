export interface IProject {
	id: number
	title: string
	subTitle: string
	slug: string
	body: string
	poster: string
	link?: string
}

export interface IProjectInput extends Omit<IProject, 'id'> {}
