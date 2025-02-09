import styles from '../app.module.css'
export const TaskList = ({ todos, isLoading, onUpdateTask, onDeleteTask, isUpdating, isDeleting }) => {
    if (isLoading) {
      return <div className={styles.loader}></div>;
    }
  
    return (
      <div>
        {todos.map(({ id, title, completed }) => (
          <div key={id} className={styles.task}>
            <span>{title} {completed ? '|| Completed' : '|| Pending'}</span>
            <button
              onClick={() => onUpdateTask(id, completed)}
              disabled={isUpdating}
              className={styles.updateButton}
            >
              {isUpdating ? 'Updating...' : 'Toggle Completion'}
            </button>
            <button
              onClick={() => onDeleteTask(id)}
              disabled={isDeleting}
              className={styles.deleteButton}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))}
      </div>
    );
};