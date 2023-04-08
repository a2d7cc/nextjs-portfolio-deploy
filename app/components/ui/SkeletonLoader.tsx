import cn from 'classnames'
import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#b936ee"
			highlightColor="#eee"
			className={cn('rounded-lg', className)}
		/>
	)
}

export default SkeletonLoader
