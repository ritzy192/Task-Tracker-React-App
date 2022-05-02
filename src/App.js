import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from "./AddTask";
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
        
    {
        id:'1',
        title:'Task 1',
        description: 'This is task 1',
        completed: true,
        reminder: true
    },
    {
        id:'2',
        title:'Task 2',
        description: 'This is task 2',
        completed: false,
        reminder: false
    },
    {
        id:'3',
        title:'Task 3',
        description: 'This is task 3',
        completed: true,
        reminder: false
    },
    {
        id:'4',
        title:'Task 4',
        description: 'This is task 4',
        completed: false,
        reminder: false
    }])
    
    //Delete Task
    const deleteTask = (id) => {
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
  return (
    <div className='container'>
        <Header/>
        <AddTask onAddTask = {addTask}/>
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
