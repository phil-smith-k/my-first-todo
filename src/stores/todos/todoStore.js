import state from './state';
import getters from './getters';
import actions from './actions'

export const todoStoreConfig = {
    id: 'todo',
    state,
    getters,
    actions,
};