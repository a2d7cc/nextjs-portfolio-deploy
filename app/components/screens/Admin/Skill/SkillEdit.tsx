import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import formStyles from '@/shared/admin/adminForm.module.scss'
import generateSlug from '@/utils/string/generateSlug'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { ISkillInput } from '@/shared/types/skills.type'
import { useSkillEdit } from './useSkillEdit'

const DynamicTextEditor = dynamic(
	() => import('@/ui/form-elements/TextEditor/TextEditor'),
	{
		ssr: false,
	}
)

const SkillEdit: FC = () => {
	// Initialise function, state from Form library
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<ISkillInput>({ mode: 'onChange' })

	// We are providing setValue to hook, when we get data from backend, than thorught it here to form
	const { isLoading, onSubmit } = useSkillEdit(setValue)

	return (
		<>
			<AdminNavigation />
			<Heading title="Edit project" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
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
								{...register('description', {
									required: 'Description is required!',
								})}
								placeholder="Description"
								error={errors.description}
								style={{ width: '100%' }}
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
						<Button>Update</Button>
					</>
				)}
			</form>
		</>
	)
}

export default SkillEdit
