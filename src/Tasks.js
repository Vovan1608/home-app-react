import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const Tasks = () => {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const updateTaskText = (e) => {
        setTaskText(e.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, { taskText, id: uuidv4() }]);
    };

    const completeTask = (completedTask) => {
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter((task) => task.id !== completedTask.id));
    };

    const deleteTask = (deletedTask) => {
        setCompletedTasks(completedTasks.filter((task) => task.id !== deletedTask.id));
    };

    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add task</button>
            </div>
            <div className='task-list'>
                {
                    tasks.map((task) => {
                        const { id, taskText } = task;

                        return (
                            <div key={id} onClick={() => completeTask(task)}>
                                {taskText}
                            </div>
                        );
                    })
                }
            </div>
            <div className='completed-list'>
                {
                    completedTasks.map((task) => {
                        const { id, taskText } = task;

                        return (
                            <div key={id}>
                                {taskText}{' '}
                                <span className='delete-task' onClick={() => deleteTask(task)}>
                                    x
                                </span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Tasks;
