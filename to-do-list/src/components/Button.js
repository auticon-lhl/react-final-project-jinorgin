function Button(props) {

    const { status, completeTask, deleteTask } = props

    return (
        <div>
            {/*status === "" && <button onClick={completeTask}>✔</button>*/}
            {<button>✔</button>}
            {/*<button onClick={deleteTask}>❌</button>*/}
            <button>❌</button>
        </div>
    )
}
export default Button