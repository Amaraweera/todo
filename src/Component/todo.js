import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { addTask, taskDone, deleteTask } from "../Redux/todo.actions";

const Todo = (props) => {
    const [addTask, setAddTask] = useState({
        showInput: false,
        buttonName: "New Task"
    });

    const [task, setTask] = useState('');

    const submitTask = () => {
        if (/\S/.test(task))
            props.addTask({ task: task });
        else
            alert("Task name is required");

        setTask("");
    }

    return (
        <Fragment>
            <div id="myDIV" className="header">
                <h2>
                    TO DO LIST 
                    <button 
                        onClick={
                            () => { 
                                setAddTask({ 
                                    showInput: !addTask.showInput,
                                    buttonName: addTask.showInput ?
                                                "New Task"
                                                :
                                                "Hide" 
                                            }) 
                                    }
                                } 
                        className="addBtn"
                    >
                        {addTask.buttonName}
                    </button>
                </h2>
                {addTask.showInput &&
                    <Fragment>
                        <input 
                            onChange={(e) => setTask(e.target.value)}
                            value={task} 
                            type="text" 
                            id="myInput"
                            placeholder="Task Name" 
                        />
                        <button 
                            onClick={() => submitTask()} 
                            className="addBtnList"
                        >
                            Add To List
                        </button>
                    </Fragment>
                }
            </div>
            <ul id="myUL">
                {props.todo.map((task, key) => (
                    <li onClick={ () => props.taskDone({ id: task.id })} 
                        className={task.done ? "checked" : ""} 
                        key={key}>{task.name} 
                        <span 
                            onClick={() => props.deleteTask({ id: task.id })}
                            className="close"
                        >
                        ×
                        </span>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        todo: state.todo.tasks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (data)    => dispatch(addTask(data)),
        taskDone: (data)   => dispatch(taskDone(data)),
        deleteTask: (data) => dispatch(deleteTask(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
