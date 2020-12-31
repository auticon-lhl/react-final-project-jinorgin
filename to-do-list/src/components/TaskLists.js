import Task from './Task'

function TaskList(props) {

    const { tasks, status, completeTask, deleteTask, curDate } = props




    const parsedTask = tasks.map(taskItem=>

        <Task
            id={taskItem.id}
            key={taskItem.id}
            task={taskItem.task}
            date={taskItem.date}
            time={taskItem.time}
            status={status}
            completeTask={completeTask}
            deleteTask={deleteTask}
            curDate={curDate}
        />)


    return (
        <ul>
            {parsedTask}
        </ul>
    )
}
export default TaskList