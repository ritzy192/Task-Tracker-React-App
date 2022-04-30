import {FaTrash} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return (
    <div className="task">
        <h3>
            {task.title} 
            <FaTrash 
                style={{color:'red'}} 
                onClick={()=>onDelete(task.id)}>
            </FaTrash>
        </h3>
        <p>Completed: {task.completed}</p>
    </div>
  )
}

export default Task