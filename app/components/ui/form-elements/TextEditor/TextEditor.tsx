import cn from 'classnames'
import { ContentState, convertToRaw, EditorState } from 'draft-js'
import { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { ITextEditor } from '../form.interface'
import styles from '../form.module.scss'
import { FileService } from '@/services/file.service'
import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html'

const TextEditor: FC<ITextEditor> = ({
	placeholder,
	onChange,
	error,
	value,
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())

	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (!isUpdated) {
			const defaultValue = value ? value : ''

			const newEditorState = EditorState.createWithContent(stateFromHTML(defaultValue))
			setEditorState(newEditorState)
		}
	}, [value, isUpdated])

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setEditorState(editorState)

		/* return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent()))) */
		return onChange(stateToHTML(editorState.getCurrentContent()))
	}

	const uploadImageCallBack = async (file: any) => {
		if (file) {
			const formData = new FormData()
			formData.append('file', file)
			const link = await FileService.upload(formData)
			return Promise.resolve({
				data: {
					link: `${process.env.APP_URL}${link.data[0].url}`,
				},
			})
		}
	}

	return (
		<div
			className={cn(styles.common, styles.editorWrapper, 'animate-fade')}
		>
			<label>
				<span>{placeholder}</span>

				<div className={styles.wrapper}>
					<Editor
						toolbarClassName={styles.toolbar}
						editorClassName={styles.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={{
							options: ['inline', 'blockType', 'list', 'image'],
							inline: {
								inDropdown: false,
								className: undefined,
								component: undefined,
								dropdownClassName: undefined,
								options: ['bold', 'italic', 'underline', 'strikethrough'],
							},
							blockType: {
								inDropdown: false,
								options: [],
							},
							list: {
								inDrodown: false,
								options: ['unordered', 'ordered'],
							},
							image: {
								urlEnabled: true,
								uploadEnabled: true,
								uploadCallback: uploadImageCallBack,
								previewImage: true,
								alt: { present: false, mandatory: false },
							},
						}}
					/>
				</div>

				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		</div>
	)
}

export default TextEditor
