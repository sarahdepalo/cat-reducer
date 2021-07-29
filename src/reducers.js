import { ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './actions';

export function cat(state, action) {
    switch (action.type) {
        case ACTION_SET_NAME:
            return {
                ...state,
                name: action.payload,

            }
        case ACTION_SET_ACTIVITY:
            return {
                ...state,
                activity: action.payload
            }

        default:
            return state
    }
}
