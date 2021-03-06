import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from "./AddTask";
import { useState, useEffect } from "react"
import { FaArrowAltCircleDown } from "react-icons/fa";

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

    const fetchTask = async (id) =>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
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
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })
      const data = await res.json()
      setTasks(
        tasks.map((task) => {
          return task.id ===id ? { ...task,reminder: data.reminder} : task
        })
      )
    }
    //Add Task
    const addTask = async (task) =>{
      const res = await fetch(`http://localhost:5000/tasks`,{
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()
      setTasks([...tasks, data])
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
