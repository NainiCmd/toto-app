import { useState } from "react";
// Importing useState to manage todos inside the App component.

import TodoInput from "./component/TodoInput.jsx";
// Importing the input component where user types new tasks.

import TodoList from "./component/TodoList.jsx";
// Importing the list component that displays and manages tasks.


function App() {
  const [todos, setTodos] = useState([]);
  // Creating a state called 'todos' which stores all the tasks.
  // setTodos is used to update the list.
  // Initially it's an empty array.
  

  // ADD
  const addTodo = (text) => {
    if (!text || !text.trim()) return;
    // If the text is empty or contains only spaces, do nothing.

    setTodos([{ id: Date.now(), text: text.trim(), done: false }, ...todos]);
    // Creating a new todo object:
    // id → unique timestamp
    // text → the task text
    // done → task is not completed by default
    // Then adding this new todo at the top of the list.
  };
  // “addTodo takes the text, creates a new todo object with id, text, and done status, and updates the list.”



  // DELETE
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    // Filtering out the todo whose id matches the clicked one.
  };
  // “deleteTodo removes a todo using the filter function.”



  // TOGGLE DONE
  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
    // Loop through todos.
    // If id matches, flip the done value (true becomes false, false becomes true).
  };
  // “toggleTodo marks a task as done or not done by flipping the done value.”



  // UPDATE / RENAME
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
    // If id matches, replace the old text with the new text entered by the user.
  };
  // “updateTodo changes the text of a task when I edit it.”



  return (
    <div style={{ padding: 20 }}>
      {/* Container for the whole app */}

      <h1>Advanced Todo App</h1>
      {/* Application title */}

      <TodoInput addTodo={addTodo} />
      {/* Passing the addTodo function to TodoInput component */}

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      {/* Passing todos and all other functions to TodoList component */}
    </div>

    // “I pass all functions and todos to child components using props.”
  );
}

export default App;
// Exporting App so index.js can render it.
