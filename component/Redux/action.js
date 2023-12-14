import { userData } from './constants'




export function user(action) {

    return {
        type: userData,
        payload: action
    }
}


