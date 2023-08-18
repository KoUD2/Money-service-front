export const getAdminUrl = (url: string) => `/director/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
