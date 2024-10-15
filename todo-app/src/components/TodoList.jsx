import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        filter === "ALL";

      const matchSearch =
        typeof todo.text === "string" &&
        todo.text.toLowerCase().includes(searchTerm);

      return matchFilter && matchSearch;
    });
  });
  console.log("Filterd Todos-> ", filteredTodos);
  return (
    <ul>
      <li className="my-2 text-sm italic">All your Notes here...</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
