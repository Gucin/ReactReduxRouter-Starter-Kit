import { SET_COUNT } from './constants'

const initalState = {
    count: 0
}

const appReducers = (state = initalState, action) => {
    switch (action.type) {
        case SET_COUNT: 
            return {
                ...state,
                count: action.count
            }
        default: 
            return state
    }
}

export default appReducers