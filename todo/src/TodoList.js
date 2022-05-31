import React, { useEffect } from "react";

const TodoItem = React.memo(function ({ todo, onRemove, onToggle }) {
  return (
    <li
      style={{ padding: "5px 0", textDecoration: todo.done && "line-through" }}
    >
      <span style={{ cursor: "pointer" }} onClick={() => onToggle(todo.id)}>
        {todo.desc}
      </span>
      <button style={{ marginLeft: 10 }} onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </li>
  );
});

function TodoList({ todos, onRemove, onToggle }) {
  useEffect(() => {
    // console.log("렌더링");
  });
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
