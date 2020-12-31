import { useState } from "react";
import Button from "./Button"

function Task(props) {

    const { task, date, status, completeTask, curDate } = props

    const dueDate = new Date(date) 

    let difference = dueDate - curDate; //subtract Due Date with Current Date

    const differenceDays = Math.floor(difference / (1000 * 60 * 60 * 24)) //Days

    const differenceTime = Math.floor((difference / (1000 * 60 * 60)) % 24)//Time

    let lateDue = curDate - dueDate; 

    const lateDays = Math.floor(lateDue / (1000 * 60 * 60 * 24))

    const lateTime = Math.floor((lateDue / (1000 * 60 * 60)) % 24)

    const deleteTask = function () {
        props.deleteTask(props.id)
    }



    return (
        <li className={status}>
            
            {/*Before adding CSS */}
            <span><i>{differenceDays} days {differenceTime} hours</i> {task}</span>

            <div>
                <button onClick={completeTask} className="check">✔</button>
                <button onClick={deleteTask} className="delete">❌</button>
            </div>
        </li>
    )
}
export default Task