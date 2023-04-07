import { axiosClassic } from "@/api/interceptors";
import { IMail } from "@/shared/types/mail.type";


export const MailService = {
	async send(mail: IMail) {
		return axiosClassic.post<string>(
			'/mailing/send-mail',
			mail
		)
	},
}
