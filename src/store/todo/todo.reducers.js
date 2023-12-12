const initialState = {
    todoList: [],
    doneList: [],
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case 'REMOVE_TODO':
            return{
                ...state,
                todoList: action.payload
            }
        case 'DONE_TODO':
            return {
                ...state,
                doneList: [...state.doneList, action.payload]
            };
        default:
            return state
    }
}
