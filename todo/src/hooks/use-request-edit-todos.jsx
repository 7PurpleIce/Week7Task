import { useState } from "react"
// Принимает функцию refreshTodos из App.jsx
export const useRequestUpdateTask = (refreshTodos) => {
    const [isUpdating, setIsUpdating] = useState(false)

    const requestUpdateTask = (taskId, currentCompleted) => {
        setIsUpdating(true)
        
        fetch(`http://localhost:3050/todos/${taskId}`, {
        method: "PATCH",
          headers: { "Content-type": "application/json;charset=utf-8" },
          body: JSON.stringify({
            completed: !currentCompleted // Инвертируем состояние выполнения задачи  (выполнено/не выполнено)
          })
        })
          .then((rawResponse) => rawResponse.json())

          .then((response) => {
            console.log('Task state was updated, server response', response)
            // вызываем  функцию refreshTodos() для того что бы обновить флаг и запустить повторный рендер
            refreshTodos()
          })
          .finally(() => setIsUpdating(false))
    }

    return{
        isUpdating,
        requestUpdateTask
    }
}