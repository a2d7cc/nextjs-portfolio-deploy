import { EditorProps } from 'draft-js'
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

export interface IFieldTextAreaProps {
	placeholder: string
	error?: FieldError | undefined,
	rows?: number,
	cols?: number
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps
type TypeTextAreaPropsField = InputHTMLAttributes<HTMLTextAreaElement> & IFieldTextAreaProps

export interface IFieldTextArea extends TypeTextAreaPropsField {}
export interface IField extends TypeInputPropsField {}

export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
