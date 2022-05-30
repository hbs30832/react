import React, { useRef, useState } from "react";

function TodoList() {
  // 배열을 렌더링 => 컴포넌트 분리.
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "컴포넌트 만들기",
      deadline: "6/7",
    },
    {
      id: 2,
      text: "상태 관리하기",
      deadline: "6/10",
    },
    {
      id: 3,
      text: "배열 렌더링하기",
      deadline: "6/30",
    },
  ]);

  const [inputs, setInputs] = useState({
    text: "",
    deadline: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      // inputs["deadlin"] => inputs.deadline
      [name]: value,
    });
  };

  const nextId = useRef(4);
  const inputText = useRef();

  const onCreate = () => {
    setTodoList([
      ...todoList,
      {
        id: nextId.current,
        text: inputs.text,
        deadline: inputs.deadline,
      },
    ]);
    nextId.current = nextId.current + 1;
    setInputs({
      text: "",
      deadline: "",
    });
    inputText.current.focus();
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="text"
          onChange={handleInput}
          value={inputs.text}
          ref={inputText}
        />
        <input
          type="text"
          name="deadline"
          onChange={handleInput}
          value={inputs.deadline}
        />
        <button onClick={onCreate}>등록</button>
      </div>
      <ul>
        {/* <li>{todoList[0].text}</li> */}
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

function TodoItem({ todo }) {
  return (
    <li>
      {todo.text} ({todo.deadline})
    </li>
  );
}

export default TodoList;
