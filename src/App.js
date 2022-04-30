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
        completed: 'False',
        reminder: true
    },
    {
        id:'2',
        title:'Task 2',
        description: 'This is task 2',
        completed: 'true',
        reminder: false
    },
    {
        id:'3',
        title:'Task 3',
        description: 'This is task 3',
        completed: 'False',
        reminder: false
    },
    {
        id:'4',
        title:'Task 4',
        description: 'This is task 4',
        completed: 'true',
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
  return (
    <div className='container'>
        <Header/>
        <AddTask/>
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
