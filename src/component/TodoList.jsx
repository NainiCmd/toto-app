import { useState } from "react";
// I am importing useState to manage local states like editing and edit text.

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
// This component receives all todos and functions (toggle, delete, update) from App.js.

  const [editingId, setEditingId] = useState(null);
  // This state stores the id of the todo which is currently being edited.
  // If editingId is null, it means no todo is in edit mode.

  const [editText, setEditText] = useState("");
  // This state stores the new text the user types while editing a todo.

  if (!todos || todos.length === 0) return <p>No todos yet</p>;
  // If no todos are available, show a simple message.

  return (
    <ul style={{ paddingLeft: 0 }}>
      {/* Rendering a list of todo items */}

      {todos.map((todo) => (
        // Looping through each todo and displaying it.

        <li
          key={todo.id}
          // key helps React identify which item is which.

          style={{
            listStyle: "none",
            marginBottom: 12,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* If this todo is being edited */}
          {editingId === todo.id ? (
            <>
              {/* Show input box for editing */}
              <input
                value={editText}
                // Input value controlled by editText state.

                onChange={(e) => setEditText(e.target.value)}
                // Update editText state as user types.

                style={{ padding: 6, flex: 1 }}
              />

              {/* Save Edited Text */}
              <button
                onClick={() => {
                  if (editText.trim()) updateTodo(todo.id, editText.trim());
                  // Call updateTodo function from App.js to save changes.

                  setEditingId(null);
                  // Exit edit mode.
                }}
              >
                Save
              </button>

              {/* Cancel Editing */}
              <button
                onClick={() => {
                  setEditingId(null);
                  // Exit edit mode.

                  setEditText("");
                  // Clear the edit text.
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            // Normal View (not editing)
            <>
              {/* Checkbox for marking task done or not */}
              <input
                type="checkbox"
                checked={!!todo.done}
                // If todo.done is true, checkbox is checked.

                onChange={() => toggleTodo(todo.id)}
                // When checkbox changes, toggle the done state.

                aria-label={`toggle ${todo.text}`}
              />

              {/* Todo Text */}
              <span
                onDoubleClick={() => {
                  setEditingId(todo.id);
                  // Enable edit mode for this todo.

                  setEditText(todo.text);
                  // Pre-fill input with existing text.
                }}

                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                  // If done: strike-through; else normal.

                  cursor: "pointer",
                  flex: 1,
                }}
              >
                {todo.text}
              </span>

              {/* Edit Button */}
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  // Enable edit mode.

                  setEditText(todo.text);
                  // Set current text in input.
                }}
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                onClick={() => deleteTodo(todo.id)}
                // Calls deleteTodo from App.js.

                style={{ color: "crimson" }}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
// Exporting component so App.js can use it.
