import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'clean',
      day: 'Feb 5 at 15:00',
      reminder: true
    },
    {
      id: 1,
      text: 'eat',
      day: 'Feb 5 at 19:00',
      reminder: true
    },
    {
      id: 2,
      text: 'sleep',
      day: 'Feb 5 at 22:30',
      reminder: true
    }
  ])

  const addTask = (task) => {
    const id = tasks.length
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? task.required = {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        ) : (
          'All done, nothing todo'
        )}
    </div>
  );
}

export default App;
