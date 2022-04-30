
const AddTask = () => {
  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder='Add Task'></input>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type='checkbox'></input>
        </div>
        <button className="btn btn-block" type="submit">Save Task</button>
    </form>
  )
}

export default AddTask