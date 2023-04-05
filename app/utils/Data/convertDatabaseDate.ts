export const convertDatabaseDate = (date: string) => {
	return new Date(date).toLocaleDateString('ru')
}
