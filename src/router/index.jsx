import React from "react";
import CreateTodoPage from "../pages/CreateTodoPage";
import TodoListPage from "../pages/TodoListPage";
import DoneTodo from "../pages/DoneTodo";

const routes = [
    {
        element: <CreateTodoPage/>,
        path:'/create'
    },
    {
        element: <TodoListPage/>,
        path: '/'
    },
    {
        element: <DoneTodo/>,
        path: '/done'
    }
]


export default routes