
const Task = ({task}) => {
  return (
    <div className="task">
        <h3>{task.title}</h3>
        <p>Completed: {task.completed}</p>
    </div>
  )
}

export default Task