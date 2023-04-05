import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'
import formStyles from '@/shared/admin/adminForm.module.scss'
import generateSlug from '@/utils/string/generateSlug'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { useProjects } from '../Projects/useProjects'
import { IProjectInput } from '@/shared/types/projects.type'

const DynamicTextEditor = dynamic(
	() => import('@/ui/form-elements/TextEditor/TextEditor'),
	{
		ssr: false,
	}
)

const ProjectCreate: FC = () => {
	// Initialise function, state from Form library
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IProjectInput>({ mode: 'onChange' })

	const { onSubmit } = useProjects()

	return (
		<>
			<AdminNavigation />
			<Heading title="Create Project" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				<>
					<div className={formStyles.fields}>
						<Field
							{...register('title', {
								required: 'Title is required!',
							})}
							placeholder="Title"
							error={errors.title}
							// style={{ width: '31%' }}
						/>

						<div
						// style={{ width: '31%' }}
						>
							<SlugField
								generate={() =>
									setValue('slug', generateSlug(getValues('title')))
								}
								register={register}
								error={errors.slug}
							/>
						</div>

						<Field
							{...register('subTitle', {
								required: 'Subtitle is required!',
							})}
							placeholder="Subtitle"
							error={errors.subTitle}
							style={{ width: '100%' }}
						/>

						<Controller
							name="poster"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Poster"
									error={error}
									folder="projects"
									image={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Poster is required!',
							}}
						/>


						<Controller
							name="body"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<DynamicTextEditor
									placeholder="Body"
									onChange={onChange}
									error={error}
									value={value}
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Description is required!',
								},
							}}
						/>
					</div>
					<Button>Create</Button>
				</>
			</form>
		</>
	)
}

export default ProjectCreate
