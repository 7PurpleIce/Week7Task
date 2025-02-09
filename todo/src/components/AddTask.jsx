import { useState } from 'react';
import styles from '../app.module.css'

export const AddTask = ({ onAddTask, isCreating }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    onAddTask(newTodo);
    setNewTodo('');
  };

  return (
    <div className={styles.addTask}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new task"
        className={styles.input}
      />
      <button
        onClick={handleAddTodo}
        disabled={isCreating || !newTodo.trim()}
        className={styles.button}
      >
        {isCreating ? 'Adding...' : 'Add Task'}
      </button>
    </div>
  );
};

