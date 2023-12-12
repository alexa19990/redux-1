const addTodoAction = (payload) => ({
    type: 'ADD_TODO',
    payload
})

const removeTodoAction = (payload) => ({
    type: 'REMOVE_TODO',
    payload
})

const doneTodoAction = (payload) => ({
    type: 'DONE_TODO',
    payload
})

export default {addTodoAction, removeTodoAction, doneTodoAction}