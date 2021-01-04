import * as types from './types';


const INITIAL_STATE = {
    tasks: [
        {
            id: 1,
            name: "Task 1",
            done: false
        },
        {
            id: 2,
            name: "Task 2",
            done: false
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {
    var data = action.payload;
    console.log(action);
    switch (action.type) {
        case types.ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, {
                    id: new Date().getTime(),
                    name: data.task,
                    done: false
                }],
            };
        case types.TASK_DONE:
            state.tasks.filter((task) => {
                if (task.id === data.id)
                    task.done = !task.done;

                return task;
            });

            return {
                ...state, tasks: [...state.tasks],
            };
        case types.TASK_DELETE:
            state.tasks.filter((task) => {
                return task.id !== data.id;
            });

            return {
                ...state, tasks: [...state.tasks.filter((task) => {
                    return task.id !== data.id;
                })]
            };

        default: return state;
    }
};

export default reducer;