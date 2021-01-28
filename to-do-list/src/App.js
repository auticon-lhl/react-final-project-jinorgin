import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskLists';

function App() {

  const [tasks, setTasks] = useState([]);
  const [curDate, setCurDate] = useState(new Date())
  const [status, setStatus] = useState("")

  useEffect(() => {
    const timer = setInterval(() => setCurDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  const addTask = function (task, date, time) {
    const newTask = [...tasks, { task, date: date +" "+ time, time: time, id: tasks.length }]
    setTasks(newTask)
  }

  const completeTask = function(){
    console.log("called completed task")
    setStatus(status !== "complete" ? "complete" : "")
  }

  const deleteTask = function(id){
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  }

  const lastTask = [...tasks].pop()

  return (
    <div className="App">
      <header>
        <h1>To do List</h1>
        <span className="date">{curDate.toLocaleDateString()} {curDate.toLocaleTimeString()}</span>
      </header>
      <main>
        <TaskList {...{tasks, status, completeTask, deleteTask, curDate}}/>
      </main>
      <TaskForm {...{ lastTask, addTask }} />

      <footer>
        <span>If you get up in the morning and think the future is going to be better, it is a bright day.
          Otherwise, it's not.</span><span>Elon Musk</span>
      </footer>
    </div>
  );
}

export default App;
