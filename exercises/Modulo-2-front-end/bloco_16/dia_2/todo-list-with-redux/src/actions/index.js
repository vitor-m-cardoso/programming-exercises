export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';


export const addTask = (task) => ({
  type: ADD_TASK,
  task
});

export const deleteTask = (task) => ({
  type: DELETE_TASK,
  task
})

export const toggleTask = (toggle) => ({
  type: TOGGLE_TASK,
  toggle
});
