import {ACTION_NAP, ACTION_EAT, ACTION_PLAY } from './actions';

export function cat(state, action) {
    switch(action.type) {
        case ACTION_NAP:
            return {
                activity: ACTION_NAP
            }
        case ACTION_EAT:
            return {
                activity: ACTION_EAT
            }
        case ACTION_PLAY:
            return {
                activity: ACTION_PLAY
            }
        default:
            return state
    }
}