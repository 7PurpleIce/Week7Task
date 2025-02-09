import { useState } from 'react';
import { useRequestGetTodos, useRequestAddTodoTask, useRequestDeleteTask, useRequestUpdateTask } from './hooks';
import { AddTask } from './components/AddTask';
import { SearchAndSort } from './components/SearchAndSort';
import { TaskList } from './components/TaskList';
import styles from './app.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSortEnabled, setIsSortEnabled] = useState(false);
  const [refreshTodoFlag, setRefreshTodoFlag] = useState(false);

  const refreshTodos = () => setRefreshTodoFlag(!refreshTodoFlag);

  const { isLoading, todos } = useRequestGetTodos(refreshTodoFlag);
  const { isCreating, requestAddTodoTask } = useRequestAddTodoTask(refreshTodos);
  const { isDeleting, requestDeleteTask } = useRequestDeleteTask(refreshTodos);
  const { isUpdating, requestUpdateTask } = useRequestUpdateTask(refreshTodos);

  const handleAddTask = (newTodo) => {
    requestAddTodoTask(newTodo);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTodos = isSortEnabled
    ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
    : filteredTodos;

  return (
    <div className={styles.app}>
      <AddTask onAddTask={handleAddTask} isCreating={isCreating} />
      <SearchAndSort
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isSortEnabled={isSortEnabled}
        setIsSortEnabled={setIsSortEnabled}
      />
      <TaskList
        todos={sortedTodos}
        isLoading={isLoading}
        onUpdateTask={requestUpdateTask}
        onDeleteTask={requestDeleteTask}
        isUpdating={isUpdating}
        isDeleting={isDeleting}
      />
    </div>
  );
}

export default App;