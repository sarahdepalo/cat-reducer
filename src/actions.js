export const ACTION_SET_NAME = 'action_set_name';
export const ACTION_SET_ACTIVITY = 'action_set_activity';

export function actionSetName(name) {
    return {
        type: ACTION_SET_NAME,
        payload: name
    }
};

export function actionSetActivity(input) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: input
    }
};