export const API_URL = `${process.env.APP_URL}/api`


export const getAuthUrl = (string: string) => `/auth${string}`
export const getArticlesUrl = (string: string) => `/articles${string}`
export const getProjectsUrl = (string: string) => `/projects${string}`
export const GetUsersUrl = (string: string) => `/users/${string}`

