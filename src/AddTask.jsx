/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function AddTask({ addTask }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      setError("debes introducir un texto");
      return;
    }

    addTask(text);

    setText("");
    setError("");
  };

  return (
    <form className="add" onSubmit={handleSubmit}>
      <div className="add-input-group">
        <input
          type="text"
          name="text"
          className="add-input"
          onChange={handleTextChange}
          value={text}
        />
        {error && <span className="error">{error}</span>}
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;
