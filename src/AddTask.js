import { useState } from "react"

const AddTask = () => {
    const [text,setText] = useState('')
    const [reminder,setReminder] = useState(false)
  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input 
                type='text' 
                placeholder='Add Task' 
                value={text} 
                onChange={(e)=>{
                    setText(e.target.value)
                }}></input>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
                type='checkbox'
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