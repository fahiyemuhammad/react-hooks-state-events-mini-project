import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories?.[1] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const newTask = {
        id: Date.now(), // generate unique ID
        text,
        category,
      };
      onTaskFormSubmit(newTask);
      setText("");
      setCategory(categories[1]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Details:</label>
      <input
        id="text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;