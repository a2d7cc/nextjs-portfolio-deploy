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
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { useProjectEdit } from './useProjectEdit'
import { IProjectInput } from '@/shared/types/projects.type'
import styleTagList from './TagList.module.scss'
import cn from 'classnames'
import styles from '@/components/ui/form-elements/form.module.scss'


const DynamicTextEditor = dynamic(
	() => import('@/ui/form-elements/TextEditor/TextEditor'),
	{
		ssr: false,
	}
)


const ProjectEdit: FC = () => {
	// Initialise function, state from Form library
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IProjectInput>({ 
		mode: 'onChange'})

		const { fields, append, remove} = useFieldArray({
			control, // control props comes from useForm (optional: if you are using FormContext)
			name: "tags", // unique name for your Field Array
			rules: {
				required: "Please fill the tag value"
			}
		  });


	// We are providing setValue to hook, when we get data from backend, than thorught it here to form
	const { isLoading, onSubmit } = useProjectEdit(setValue)

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

<Field
								{...register('git', {
									required: 'Git is required!',
								})}
								placeholder="Git"
								error={errors.git}
								style={{ width: '100%' }}
							/>



							<span className='mb-2'>Tags:</span>  <button className={styleTagList.button}  type="button" onClick={() => append({name: ""})}>
               Append
             </button>	
      <ul className={styleTagList.tagList}>
        {fields.map((item, index) => {
          return (

				<li key={index} className={cn(styleTagList.common, styleTagList.tag)}>
				<label>
					{/* providig ref to input element, without ref it will be on component refering, but for our library we need to provide throught component direct to input tag */}
					<input
			  className={styleTagList.input}
			  {...register(`tags.${index}.name`, {required: true})}
				defaultValue={item.name}
              />
			  {errors.tags?.[index]?.name && <div className={styleTagList.error}>This can't be empty</div>}
				</label>
				<button type="button" className={styleTagList.badge} onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
			 <div className='text-white' >{errors.tags?.root?.message}</div>
      </ul>




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

export default ProjectEdit
