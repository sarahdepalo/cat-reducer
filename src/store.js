import { createStore } from 'redux';
import { cat } from './reducers';

const defaultState = {
    activity: 'napping'
};

export const store = createStore(cat, defaultState);