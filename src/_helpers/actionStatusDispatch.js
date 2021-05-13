export const request = (data, type) => ({ type, data })
export const success = (data, type) => ({ type, data })
export const failure = (error, type) => ({ type, error })
