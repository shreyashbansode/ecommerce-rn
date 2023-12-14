import { userData } from './constants'


const Data = {
    data: null
}

export const userReducer = (state = Data, action) => {

    switch (action.type) {

        case userData:
            return {
                ...state, Data: action.payload
            }

        default:
            return state
    }

}