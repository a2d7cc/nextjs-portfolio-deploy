export const getSkillsUrlLink = (slug: string) => `/skills/${slug}`
export const getProjectsUrlLink = (slug: string) => `/projects/${slug}`

export const getAdminUrlLink = (url: string) => `/manage/${url}`
export const getAdminHomeUrlLink = () => getAdminUrlLink('').slice(0, -1)
