import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const DoneTodo = () => {
    const {doneList} = useSelector((state) => state.todo)
    
    return(
        <div>
            <h1>done list items</h1>
            {doneList.map((item, index)=>{
                return(
                    <div key={index}>
                        <p className="doneListText">{item}</p>
                    </div>
                )
            })}
            <Link to={'/create'}>Add Items</Link>
            <br />
            <Link to={'/'}>See Items</Link>
        </div>

    )
}

export default DoneTodo