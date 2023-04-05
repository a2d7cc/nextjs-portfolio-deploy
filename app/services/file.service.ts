import axiosInterceptor from "@/api/interceptors";


export const FileService = {
	async upload(file: FormData, folder?: string) {
		return axiosInterceptor.post<{ url: string; name: string }[]>(
			'/file/upload',
			file,
			{
				params: {
					folder,
				},
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		)
	},
}
