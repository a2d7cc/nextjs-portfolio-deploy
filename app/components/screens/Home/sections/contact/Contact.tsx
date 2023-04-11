import { motion } from 'framer-motion'
import { FC } from 'react'

import Button from '@/components/ui/form-elements/Button'

import { fadeIn } from '@/utils/Animate/variants'
import { useForm } from 'react-hook-form'
import { IMail } from '@/shared/types/mail.type'
import Field from '@/components/ui/form-elements/Field'
import { useMail } from './useMail'
import TextArea from '@/components/ui/form-elements/TextArea'

const Contact: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		setValue,
		getValues,
	} = useForm<IMail>({ mode: 'onChange' })

	const { onSubmit } = useMail(setValue, reset)

	return (
		<section id="contact" className="section">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: true, amount: 0.3 }}
						className="flex-1 flex justify-start items-center
						"
					>
						<div className="text-center lg:text-left w-full">
							<h4 className="text-base md:text-6xl lg:text-xl uppercase text-accent font-medium lg:mb-2 tracking-wide">
								Get in touch
							</h4>
							<h2 className="lg:text-[75px] text-4xl leading-none mb-12">
								Let's work <br /> together!
							</h2>
						</div>
					</motion.div>
					{/* form */}
					<motion.form
						onSubmit={handleSubmit(onSubmit)}
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: true, amount: 0.3 }}
						className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-14 p-6 items-start"
					>
							<Field
								{...register('email', {
									required: 'Email is required!',
								})}
								placeholder="Email"
								error={errors.email}
								style={{ width: '100%' }}
							/>

							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '100%' }}
							/>



							<TextArea
								{...register('body', {
									required: 'Message is required!',
								})}
								placeholder="Message"
								error={errors.body}
								style={{ width: '100%' }}
							/>
						<Button className="btn btn-lg max-[600px]:mx-auto">Send message</Button>
					</motion.form>
				</div>
			</div>
		</section>
	)
}

export default Contact
