import { createSignal, createContext, useContext } from 'solid-js';
const GlobalContext = createContext();
const initialSate = {
    todos: [
        {
            id: 1,
            title: 'Clean room',
            completed: true,
        },
    ],
};
export function GlobalContextProvider(props) {
    const [state, setState] = createSignal(initialSate);
    const addTodo = (todo) => {
        console.log(todo);
    };
    const deleteTodo = (id) => {};

    return (
        <GlobalContext.Provider value={{ state, setState, addTodo, deleteTodo }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);
