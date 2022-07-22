import { useState } from 'react';

const Tasks = () => {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const updateTaskText = (e) => {
        setTaskText(e.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, taskText]);
    };

    console.log(tasks);
    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add task</button>
            </div>
        </div>
    );
};

export default Tasks;
