import {} from 'solid-js';
import { GlobalContext, useGlobalContext } from '../store/GlobalContext';
const TodoItem = ({ todo }) => {
    const [_, { deleteTodo }] = useGlobalContext(GlobalContext);
    // const handleDelete = (id) => {
    // deleteTodo(todo.id);
    //     console.log(id);
    // };
    const handleDelete = (id) => (e) => {
        // console.log(e); //PointerEvent
        deleteTodo(id);
        // console.log(id);
    };

    return (
        <div>
            <h2>
                {todo.id} - {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
            </h2>
            {/* <button onClick={handleDelete}>Delete</button> */}
            {/* <button onClick={(e) => handleDelete(todo.id)}>Delete</button> */}
            <button onClick={handleDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
