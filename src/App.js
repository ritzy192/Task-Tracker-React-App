import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from "./AddTask";
import { useState, useEffect } from "react"

function App() {
  const [showAddTask, setShowAddTak] = useState(false)
  const [tasks, setTasks] = useState([])
    
    useEffect(()=>{
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()
    },[])

    const fetchTasks = async () =>{
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    }
    //Delete Task
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      })
      setTasks(tasks.filter((task)=>task.id !==id))
    }
    
    //Toggle reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => {
          return task.id ===id ? { ...task,reminder: !task.reminder} : task
        })
      )
    }
    //Add Task
    const addTask = (task) =>{
      console.log(task)
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id,...task}
      setTasks([...tasks,newTask])
    }
    //Delete All Tasks
    const deleteAllTasks = () =>{
      setTasks('')
      console.log(tasks)
    }
  return (
    <div className='container'>
        <Header 
        onAddTaskClick = {()=>{
          setShowAddTak(!showAddTask)
        }} 
        onDeleteAll={deleteAllTasks}
        showAddButton = {showAddTask}/>
        {showAddTask && <AddTask onAddTask = {addTask}/>}  {/* && is the shorthand for ternary operator */}
        {tasks.length> 0 ? 
          <Tasks 
            tasks= {tasks} 
            onDelete={deleteTask}
            onToggle = {toggleReminder}
            />: 'No Tasks To Show'}
    </div>
  );
}

export default App;
