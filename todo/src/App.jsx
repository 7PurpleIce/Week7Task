import { useRequestGetTodos } from './hooks'
import styles from './app.module.css'

function App() {

  const { isLoading, todos } = 
    useRequestGetTodos()

  return (
      <div className={styles.app}>
      {isLoading 
        ? <div className={styles.loader}></div> 
        : todos.map(({ userId, id, title, completed}) => (
        <div key={id} className={styles.task}>
          <span>{`Task of ${userId}: ${title}`}</span>
          <input
            type="checkbox"
            checked={completed}
            readOnly
            className={styles.checkbox}
          />
        </div>
      ))}
    </div>
  )
}

export default App
