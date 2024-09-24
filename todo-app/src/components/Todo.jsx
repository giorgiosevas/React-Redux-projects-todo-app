import React from "react";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  //console.log("newTodoText->", newTodoText);

  const handleAddTodo = (text) => {
    //here we'll dispatch action:
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal Todo App
      </h2>

      {/*Input text and btn*/}
      <div className="flex items-center">
        <input
          value={newTodoText}
          onChange={(e) => {
            setNewTodoText(e.target.value);
          }}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        ></input>
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-500 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus />
        </button>
      </div>
    </div>
  );
};

export default Todo;
