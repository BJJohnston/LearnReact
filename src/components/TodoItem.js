import React from "react";

function TodoItem(props) {
  return (
    <div>
      <input type="checkbox" />
      <p>{props.text}</p>
    </div>
  );
}

export default TodoItem;
