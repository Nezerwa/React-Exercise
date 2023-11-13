import { useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import { addTodos, removeTodos, toggleTodos } from "./redux/reducer";

const myStateProps = (state) => {
  return {
    todos: state,
  };
};

const dispatchProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    toggleTodo: (id) => dispatch(toggleTodos(id)),
  };
};
function App(props) {
  const [Todo, SetTodo] = useState("");
  const handleSubmit = (e) => {
    if (Todo.trim() !== "") {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: Todo,
        completed: false,
      });
      SetTodo("");
    }
    e.preventDefault();
  };
  const handleChange = (e) => {
    SetTodo(e.target.value);
  };

  return (
    <div className="bg-white flex w-full h-screen flex-col">
      <header className="flex flex-col gap-4">
        <h1 className="p-5 text-[90px] text-center text-gray-400">todolist</h1>
        <form
          action=""
          className="rounded-lg mx-auto w-4/6  flex px-5 py-2 shadow-lg"
        >
          <input
            type="text"
            placeholder="Enter a Todo"
            className="focus:outline-none text-2xl flex-1"
            onChange={handleChange}
          />
          <button type="button" className="text-2xl" onClick={handleSubmit}>
            <FaPlusCircle className="text-green-700" />
          </button>
        </form>
        <ul className="flex gap-2 mx-60 flex-col">
          {props.todos.map((item) => {
            return (
              <li
                key={item.id}
                className="mx-5 my-0 flex justify-between w-full border-b-2 mb-2"
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => {
                    props.toggleTodo(item.id);
                  }}
                />
                <span
                  className={
                    item.completed
                      ? "line-through text-xl"
                      : "no-underline text-xl"
                  }
                >
                  {item.item}
                </span>
                <button
                  onClick={() => {
                    props.removeTodo(item.id);
                  }}
                >
                  <FaTrash className="text-red-600" />
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}
export default connect(myStateProps, dispatchProps)(App);
