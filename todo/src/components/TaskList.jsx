import { useTodoContext } from "../Context";
import styles from "../app.module.css";

export const TaskList = () => {
  const { todos, isLoading, requestUpdateTask, requestDeleteTask, isUpdating, isDeleting } = useTodoContext();

  if (isLoading) {
    return <div className={styles.loader}></div>;
  }

  return (
    <div>
      {todos.map(({ id, title, completed }) => (
        <div key={id} className={styles.task}>
          <span>{title} {completed ? "|| Completed" : "|| Pending"}</span>
          <button
            onClick={() => requestUpdateTask(id, completed)}
            disabled={isUpdating}
            className={styles.updateButton}
          >
            {isUpdating ? "Updating..." : "Toggle Completion"}
          </button>
          <button
            onClick={() => requestDeleteTask(id)}
            disabled={isDeleting}
            className={styles.deleteButton}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      ))}
    </div>
  );
};
