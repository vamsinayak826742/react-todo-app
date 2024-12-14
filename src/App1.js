import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");

    // Add Task
    const handleAddTask = () => {
        if (taskText.trim()) {
            setTasks([...tasks, { text: taskText, completed: false }]);
            setTaskText(""); // Clear the input field
        }
    };

    // Remove Task
    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    // Toggle Complete/Undo
    const handleToggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-app">
            <h1>TODO LIST</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add item . . ."
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <button onClick={handleAddTask}>ADD</button>
            </div>
            <div className="task-list">
                {tasks.map((task, index) => (
                    <div className="task-item" key={index}>
                        <span
                            className={task.completed ? "completed" : ""}
                        >
                            {task.text}
                        </span>
                        <div>
                            <button onClick={() => handleToggleComplete(index)}>
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button onClick={() => handleRemoveTask(index)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
