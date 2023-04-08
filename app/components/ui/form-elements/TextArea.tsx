import cn from 'classnames'
import { forwardRef } from 'react'

import { IField, IFieldTextArea } from './form.interface'
import styles from './form.module.scss'

// We are showing forwardRef type of element HTMLInputElement and then writting own interface to get access for a properties
const TextArea = forwardRef<HTMLTextAreaElement, IFieldTextArea>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			// common styles, while we have also upload field
			<div className={cn(styles.common, styles.textarea)} style={style}>
				<label>
					<span>{placeholder}</span>
					{/* providig ref to input element, without ref it will be on component refering, but for our library we need to provide throught component direct to input tag */}
					<textarea ref={ref}  {...rest}></textarea>
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

TextArea.displayName = 'TextArea'

export default TextArea
