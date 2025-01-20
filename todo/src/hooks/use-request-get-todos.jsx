import { useEffect, useState } from "react";
// Пользовательский хук получает refreshTodoFlag из useState в App.jsx 
// используется он для повторного вызова useEffect(повторится рендер)
export const useRequestGetTodos = (refreshTodoFlag) => {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
	
	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3050/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodoFlag]);

	return {
		isLoading, 
		todos
	}
}