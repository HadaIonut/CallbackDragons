import * as types from './types'

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })

export const setQueryString = (string) => ({type: types.SET_QUERY_STRING, payload: string})

export const setLogin = (string) => ({type: types.SET_LOGIN_USER, payload: string})

export const setFileStack = (fileStack) => ({type: "SET_FILE_STACK", payload: fileStack})
