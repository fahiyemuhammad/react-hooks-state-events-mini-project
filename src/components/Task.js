import React from "react";

function Task({ id, text, category, onDeleteTask }) {
  const handleClick = () => {
    onDeleteTask(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;