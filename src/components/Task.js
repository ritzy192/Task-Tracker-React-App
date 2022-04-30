import {FaTrash} from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div className="task">
        <h3>{task.title} <FaTrash style={{color:'red'}}></FaTrash></h3>
        <p>Completed: {task.completed}</p>
    </div>
  )
}

export default Task