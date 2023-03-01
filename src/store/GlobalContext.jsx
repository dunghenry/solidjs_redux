import { createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
const initialSate = {
    todos: [
        {
            id: 1,
            title: 'Clean room',
            completed: true,
        },
    ],
};
export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
    const [state, setState] = createStore(initialSate);
    const data = [
        state,
        {
            addTodo(todo) {
                setState('todos', (todos) => [...todos, todo]);
            },
            deleteTodo(id) {
                setState('todos', (todos) => {
                    return todos.filter((todo) => todo.id !== +id);
                });
            },
        },
    ];
    return <GlobalContext.Provider value={data}>{props.children}</GlobalContext.Provider>;
}

export const useGlobalContext = () => useContext(GlobalContext);
