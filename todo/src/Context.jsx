import { createContext, useContext, useState } from "react";
import { useRequestGetTodos, useRequestAddTodoTask, useRequestDeleteTask, useRequestUpdateTask } from "./hooks";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSortEnabled, setIsSortEnabled] = useState(false);
  const [refreshTodoFlag, setRefreshTodoFlag] = useState(false);

  const refreshTodos = () => setRefreshTodoFlag(!refreshTodoFlag);

  const { isLoading, todos } = useRequestGetTodos(refreshTodoFlag);
  const { isCreating, requestAddTodoTask } = useRequestAddTodoTask(refreshTodos);
  const { isDeleting, requestDeleteTask } = useRequestDeleteTask(refreshTodos);
  const { isUpdating, requestUpdateTask } = useRequestUpdateTask(refreshTodos);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTodos = isSortEnabled
    ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
    : filteredTodos;

  return (
    <TodoContext.Provider
      value={{
        todos: sortedTodos,
        isLoading,
        isCreating,
        isDeleting,
        isUpdating,
        searchTerm,
        setSearchTerm,
        isSortEnabled,
        setIsSortEnabled,
        requestAddTodoTask,
        requestUpdateTask,
        requestDeleteTask
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
