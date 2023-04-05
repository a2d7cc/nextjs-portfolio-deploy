export const API_URL = `${process.env.APP_URL}/api`


export const getAuthUrl = (string: string) => `/auth${string}`
export const getSkillsUrl = (string: string) => `/skills${string}`
export const getProjectsUrl = (string: string) => `/projects${string}`
export const GetUsersUrl = (string: string | number) => `/users/${string}`

