import * as types from './types';

export const addTask = (data) => {
    return {
        type: types.ADD_TASK,
        payload: data
    };
};

export const taskDone = (data) => {
    return {
        type: types.TASK_DONE,
        payload: data
    }
}

export const deleteTask = (data) => {
    return {
        type: types.TASK_DELETE,
        payload: data
    }
}
