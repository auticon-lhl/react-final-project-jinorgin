import { useState } from "react"


function TaskForm(props) {

const [task, setTask] = useState("")
const [date, setDate] = useState()
const [time, setTime] = useState()

const handleSubmit = function (event) {
    event.preventDefault();
    setTask("")
    props.addTask(task, date, time)

};
const handleChange = function (event) {

    if (event.target.name === "task") {
        setTask(event.target.value);
    }

    if (event.target.name === "listDate") {
        setDate(event.target.value);
    }

    if (event.target.name === "listTime") {
        setTime(event.target.value);
    }

};


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={task} type="text" name="task" placeholder="Create a task"/>
            <input onChange={handleChange} value={date} type="date" name="listDate" />
            <input onChange={handleChange} value={time} type="time" name="listTime" />
            <button type="submit">Add new task</button>
        </form>
    )
}
export default TaskForm