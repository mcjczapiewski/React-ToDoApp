import React from "react";
//Import Components
import Todo from "./Todo";

const TodoList = ({ setTodos, todos, filteredTodos }) => {
    return (
        <div className="todo-containter">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo todos={todos} setTodos={setTodos} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
