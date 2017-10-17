import { SET_COUNT } from './constants'

export function setCount(count) {
    return {
        type: SET_COUNT,
        count
    }
}