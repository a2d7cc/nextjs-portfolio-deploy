export interface ITag {
	name: string
}

export interface IProject {
	id: number
	title: string
	subTitle: string
	slug: string
	body: string
	poster: string
	link?: string
	git: string
	tags: ITag[]
}

export interface IProjectInput extends Omit<IProject, 'id'> {}
