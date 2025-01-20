import { useState } from 'react'
// Принимает функцию refreshTodos из App.jsx
export const useRequestDeleteTask = (refreshTodos) => {
    const [isDeleting, setIsDeleting] = useState(false)

    const requestDeleteTask = (taskId) => {
        setIsDeleting(true)

        fetch(`http://localhost:3050/todos/${taskId}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json;charset=utf-8" },
        })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            console.log('Task was removed, server response', response)
            // вызываем  функцию refreshTodos() для того что бы обновить флаг и запустить повторный рендер
            refreshTodos()
        })
        .finally(() => setIsDeleting(false))
    }

    return{
        isDeleting,
        requestDeleteTask
    }
}