import { useState } from "react"

const AddTask = ({onAddTask}) => {
    const [title,setTitle] = useState('')
    const [reminder,setReminder] = useState(false)
    
    const onSubmit = (e)=>{
        e.preventDefault()
        const completed = false
        if(!title)
            return alert('Task can not be empty');
        onAddTask({title,reminder,completed}) 
        setTitle('')
        setReminder(false)
    }

    return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
                type='text' 
                placeholder='Add Task' 
                value={title} 
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}></input>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
                type='checkbox'
                checked={reminder}
                value={reminder} 
                onChange={(e)=>{
                    setReminder(e.currentTarget.checked)
                }}></input>
        </div>
        <button className="btn btn-block" type="submit">Save Task</button>
    </form>
  )
}

export default AddTask