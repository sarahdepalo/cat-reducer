export const ACTION_NAP = 'napping';
export const ACTION_EAT = 'eating';
export const ACTION_PLAY = 'playing';

export function actionNap() {
    return {
        type: ACTION_NAP
    };
};

export function actionEat() {
    return {
        type: ACTION_EAT
    };
};

export function actionPlay() {
    return {
        type: ACTION_PLAY
    };
};


