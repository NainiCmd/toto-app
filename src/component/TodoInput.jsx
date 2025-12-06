import { useState } from "react";  
// I am importing useState so I can store the value typed by the user.

function TodoInput({ addTodo }) {  
  // This component receives addTodo function from App.js as a prop.

  const [text, setText] = useState("");  
  // I am creating a local state called 'text' to store what the user types in the input box.

  const handleSubmit = (e) => {  
    // This function runs when the user submits the form.
    e.preventDefault();  
    // Prevents the page from refreshing when the form is submitted.

    if (!text.trim()) return;  
    // If the input is empty or only spaces, do nothing.

    addTodo(text);  
    // I call the addTodo function from App.js and send the text to the parent component.

    setText("");  
    // After adding, I clear the input box.
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>  
      {/* When form is submitted, it calls handleSubmit function */}

      <input
        type="text"  
        // Input field for entering the todo.

        placeholder="Enter todo..."  
        // This is placeholder text inside the input.

        value={text}  
        // The value of input is controlled by 'text' state.

        onChange={(e) => setText(e.target.value)}  
        // When user types, I update the text state with setText.

        style={{ padding: 8, width: 300 }}  
        // Basic styling for input box.
      />

      <button type="submit" style={{ marginLeft: 8, padding: "8px 12px" }}>  
        {/* Submit button that triggers handleSubmit */}
        Add  
        {/* Button text */}
      </button>
    </form>
  );
}

export default TodoInput;  
// Exporting the component so App.js can use it.
s