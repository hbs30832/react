import React, { useRef, useState, useMemo, useCallback } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

function countTodo(todos) {
  console.log("해야할 일 세는 중...");
  return todos.filter((todo) => !todo.done).length;
}

function App() {
  // 배열 3개 정도 초기값 TodoList에서 글씨 출력 + 삭제 버튼까지

  const [todos, setTodos] = useState([]);
  const [desc, setDesc] = useState("");

  const nextId = useRef(4);

  const count = useMemo(() => countTodo(todos), [todos]);

  // input값 저장.
  // input값을 배열에 추가 => 객체형태.
  // id값.
  // 이벤트객체 value.

  const handleInput = (e) => {
    const { value } = e.target;
    setDesc(value);
  };

  const onCreate = useCallback(() => {
    setTodos((todos) => [...todos, { id: nextId.current, desc: desc }]);
    setDesc("");
    nextId.current = nextId.current + 1;
  }, [desc]);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  return (
    <>
      <CreateTodo onCreate={onCreate} handleInput={handleInput} desc={desc} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <div>해야할 일 : {count}개</div>
    </>
  );
}

export default App;
