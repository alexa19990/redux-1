import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import actions from '../store/todo/todo.actions.js'
const TodoListPage = () => {

    const {todoList} = useSelector((state)=> state.todo)
    const dispatch = useDispatch()


    const deleteItem = (item) => {
        const newArr = todoList.filter((todo) => todo !== item);
        dispatch(actions.removeTodoAction(newArr));
    }
    


    const doneItem = (index) => {
        const doneItem = todoList[index];
        dispatch(actions.doneTodoAction([doneItem]))
    }


    return(
        <div>
            <h2>todo</h2>
            {todoList.map((item, index)=>{
                return(
                    <div key={index} className="todoItem">
                        <p className='listText'>{item}</p>
                        <button onClick={()=>deleteItem(item)}>delete</button>
                        <button onClick={()=>doneItem(index)}>done</button>
                    </div>
                )
            })}
            <Link to={'/create'}>To List</Link>
            <br />
            <Link to={'/done'}>see doneItems</Link>
        </div>
    )
}

export default TodoListPage