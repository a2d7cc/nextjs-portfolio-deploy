export interface IProject {
	id: number
	title: string
	subTitle: string
	slug: string
	body: string
	poster: string
	bigPoster: string
}

export interface IProjectInput extends Omit<IProject, 'id'> {}
