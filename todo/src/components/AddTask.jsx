import { useState } from "react";
import { useTodoContext } from "../Context";
import styles from "../app.module.css";

export const AddTask = () => {
  const { requestAddTodoTask, isCreating } = useTodoContext();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    requestAddTodoTask(newTodo);
    setNewTodo("");
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
        {isCreating ? "Adding..." : "Add Task"}
      </button>
    </div>
  );
};
