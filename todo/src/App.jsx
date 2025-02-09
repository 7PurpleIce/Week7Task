import { TodoProvider } from './Context';
import { AddTask } from './components/AddTask';
import { SearchAndSort } from './components/SearchAndSort';
import { TaskList } from './components/TaskList';
import styles from './app.module.css';

function App() {
  return (
    <TodoProvider>
      <div className={styles.app}>
        <AddTask />
        <SearchAndSort />
        <TaskList />
      </div>
    </TodoProvider>
  );
}

export default App;
