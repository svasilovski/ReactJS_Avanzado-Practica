import React, { useState } from 'react';
import useList from '../../hooks/useList';

const Tasklist = () => {
    const tasks = useList([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const clearClick = () => { 
      tasks.clear();
    };

    const sorthClick = () => {
      tasks.sorth();
    };

    const reverseClick = () => {
      tasks.reverse();
    };

    return (
      <div>
        <h1>
          Task List
        </h1>
        <form onSubmit={handleSubmit}>
          <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
          <button type="submit">Create Task</button>
        </form>
        { tasks.isEmpty()
            ? (<p>Task List is Empty</p>)
            : (
              <div>
                <button type="button" onClick={clearClick}>Clear List</button>
                <button type="button" onClick={sorthClick}>Sorth List</button>
                <button type="button" onClick={reverseClick}>Reverse List</button>
                <ul>
                  {tasks.value.map((task, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        onClick={() => tasks.remove(index)}
                        checked={false}
                      />
                      { task }
                    </li>
                          ))}
                </ul>
              </div>
            )}

      </div>
    );
};

export default Tasklist;
