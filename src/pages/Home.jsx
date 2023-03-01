import { For, useContext } from 'solid-js';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import { GlobalContext } from '../store/GlobalContext';
// import { useGlobalContext } from '../GlobalContext';
const Home = () => {
    const [state] = useContext(GlobalContext);
    const { todos } = JSON.parse(JSON.stringify(state));

    return (
        <div>
            <h2>Home</h2>
            <Form />
            <For each={todos} by>{(todo) => <TodoItem todo={todo} />}</For>
        </div>
    );
};

export default Home;
