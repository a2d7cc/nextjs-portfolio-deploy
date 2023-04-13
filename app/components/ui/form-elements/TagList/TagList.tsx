import React, { FC, forwardRef } from 'react'
import { FieldError, UseFormRegister, useFieldArray } from 'react-hook-form'

import styles from './TagList.module.scss'
import cn from 'classnames'

interface ITagList {
	error?: FieldError
	register: any
	control: any
}


const TagList: FC<ITagList> = ({ control, register }) => {
	
	const { fields, append, remove } = useFieldArray({
		control,
		name: "tags"
	  });

	return (
		<>
	<span className='mb-2'>Tags:</span>  <button className={styles.button}  type="button" onClick={() => append({name: ""})}>
               Append
             </button>	
      <ul className={styles.tagList}>
        {fields.map((item: any, index) => {
          return (

				<li className={cn(styles.common, styles.tag)}>
				<label>
					{/* providig ref to input element, without ref it will be on component refering, but for our library we need to provide throught component direct to input tag */}
					<input
			  className={styles.input}
                name={`tags[${index}].name`}
                ref={register()}
				defaultValue={item.name}
              />
				</label>
				<button type="button" className={styles.badge} onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

    </>
	)
}

export default TagList
