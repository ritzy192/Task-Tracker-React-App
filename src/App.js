import Header from "./components/Header";
import Tasks from './components/Tasks'
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
        
    {
        id:'1',
        title:'Task 1',
        description: 'This is task 1',
        completed: 'false'
    },
    {
        id:'2',
        title:'Task 2',
        description: 'This is task 2',
        completed: 'true'
    },
    {
        id:'3',
        title:'Task 3',
        description: 'This is task 3',
        completed: 'false'
    },
    {
        id:'4',
        title:'Task 4',
        description: 'This is task 4',
        completed: 'true'
    }])
    //Delete Task
    const deleteTask = (id) => {
      console.log('delete ', id)
    }
  return (
    <div className='container'>
        <Header/>
        <Tasks tasks= {tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
