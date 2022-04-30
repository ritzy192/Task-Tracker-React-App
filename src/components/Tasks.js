export const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map((task)=>{
                return <h3 key={task.id}>{task.title}</h3>
            })}
        </>
    )
}

export default Tasks
