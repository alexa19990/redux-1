import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../store/todo/todo.actions.js';
import { Link } from 'react-router-dom';

const CreateTodoPage = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(actions.addTodoAction(value))
        console.log(value)
        setValue('')
    }

    return(
        <form action="">
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={onSubmit}>submit</button>


            <Link to={'/'}>To List</Link>
            <br />
            <Link to={'/done'}>see done items</Link>
        </form>
    )

};

export default CreateTodoPage;