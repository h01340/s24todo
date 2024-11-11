//export default function TodoTable(props) {
export default function TodoTable({todos,deleteTodo}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {//props.todos.map((todo, index) => (
                    todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.description}</td>
                        <td>{todo.date}</td>
                        <td>
                            <button onClick={() => 
                                deleteTodo(index)}>
                                    Poista
                                    </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
