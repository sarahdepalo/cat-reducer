import { createStore } from 'redux';
import { cat } from './reducers';

const defaultState = {
    activity: 'napping',
    name: 'Taco'
};

export const store = createStore(cat, defaultState);