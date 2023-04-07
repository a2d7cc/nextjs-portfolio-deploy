import { MailService } from "@/services/mail.service"
import { IMail } from "@/shared/types/mail.type"
import { toastrError } from "@/utils/Storage/toastr-error"
import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"



export const useMail = (setValue: UseFormSetValue<IMail>, reset: any) => {


	const { isLoading, mutateAsync } = useMutation(
		'update project',
		(data: IMail) => MailService.send(data),
		{
			onError(error) {
				toastrError(error, 'Mail did not sent')
			},
			onSuccess() {
                reset()
				toastr.success('Thanks for your message', 'sent successfully')
			},
		}
	)

	const onSubmit: SubmitHandler<IMail> = async (data) => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
