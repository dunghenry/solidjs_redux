import { createSignal, onMount } from 'solid-js';
import { GlobalContext, useGlobalContext } from '../store/GlobalContext';
const Form = () => {
    let input;
    onMount(() => {
        input.focus();
    });
    const [_, { addTodo }] = useGlobalContext(GlobalContext);
    const [title, setTitle] = createSignal('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title() !== '') {
            const todo = {
                id: Math.floor(Math.random() * 100) - 1,
                title: title(),
                completed: false,
            };
            addTodo(todo);
            setTitle('');
        } else {
            alert('Please enter title');
        }
    };
    return (
        <form onSubmit={handleSubmit} style={{ margin: '10px 10px' }}>
            <h2>Form</h2>
            <input
                ref={input}
                type="text"
                value={title()}
                oninput={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
            />
            <button type="submit">Add todo</button>
        </form>
    );
};

export default Form;
