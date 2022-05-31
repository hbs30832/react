import React, { useState, useRef, useMemo, useCallback } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const countTodo = (todoList) => {
  console.log("숫자 세는 중");
  return todoList.filter((todo) => !todo.done).length;
};

function App() {
  // 배열을 렌더링 => 컴포넌트 분리.
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "컴포넌트 만들기",
      deadline: "6/7",
      done: true,
    },
    {
      id: 2,
      text: "상태 관리하기",
      deadline: "6/10",
      done: false,
    },
    {
      id: 3,
      text: "배열 렌더링하기",
      deadline: "6/30",
      done: false,
    },
  ]);

  const [inputs, setInputs] = useState({
    text: "",
    deadline: "",
  });

  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        // inputs["deadlin"] => inputs.deadline
        [name]: value,
      });
    },
    [inputs]
  );

  const nextId = useRef(4);
  // const inputText = useRef();

  const onCreate = useCallback(() => {
    const todo = {
      id: nextId.current,
      text: inputs.text,
      deadline: inputs.deadline,
    };
    // 스프레드 문법으로 배열 복사 후 원소 추가.
    // setTodoList([...todoList, todo]);

    // Array.prototype.concat => 배열에 원소(배열)를 추가해서 '새로운 배열'을 return
    setTodoList(todoList.concat(todo));

    nextId.current = nextId.current + 1;
    setInputs({
      text: "",
      deadline: "",
    });
  }, [inputs, todoList]);

  const onRemove = useCallback(
    (id) => {
      setTodoList(todoList.filter((todo) => todo.id !== id));
    },
    [todoList]
  );

  const onToggle = useCallback(
    (id) => {
      //  => {...todo} => {id : 1, text: "배열 렌더링하기 ", done :false}
      //  => {id : 1, text: "배열 렌더링하기 ", done :false, done: !todo.done } => done 중복으로 덮어씌움.
      setTodoList(
        todoList.map((todo) => {
          // if (id === todo.id) {
          //   return { ...todo, done: !todo.done };
          // } else {
          //   return todo;
          // }
          return id === todo.id ? { ...todo, done: !todo.done } : todo;
        })
      );
    },
    [todoList]
  );

  // dependency에 넣은 todoList가 변화가 있을 때만 다시 계산을 한다.
  const count = useMemo(() => countTodo(todoList), [todoList]);

  // console.log(count);

  return (
    // 컴포넌트의 retrun값으로 반드시 태그 하나로 묶어야한다.
    // 프래그먼트를 통해서 묶을 수 있다. <>내용</>
    // 태그는 반드시 닫혀있어야한다.

    <>
      <CreateTodo
        handleInput={handleInput}
        onCreate={onCreate}
        inputs={inputs}
      />
      <TodoList
        onCreate={onCreate}
        todoList={todoList}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>남은 일 : {count}개</div>
    </>
  );
}

export default App;
