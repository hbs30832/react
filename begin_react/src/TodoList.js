import React, { useEffect } from "react";

function TodoList({ onRemove, onToggle, todoList, count }) {
  return (
    <>
      <ul>
        {/* <li>{todoList[0].text}</li> */}
        {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
}

const TodoItem = React.memo(function ({ todo, onRemove, onToggle }) {
  // 앞의 값이 true일때만 뒤를 확인해야함. => 앞의 값이 true일때만 뒤에 값이 적용.
  // const isDone = todo.done && "done";

  //
  useEffect(() => {
    // dependency가 비어있을 때
    // 처음 마운트될 때 (화면에 나타날 때) => API 호출(서버), setInterval 등록.
    console.log("화면에 출력");
    return () => {
      // 언마운트 (화면에서 사라질 때) => 클린업함수 => 라이브러리 인스턴스 삭제. clearInterval 등.
      console.log("화면에서 사라짐");
    };
  }, []);

  useEffect(() => {
    // console.log("상태값이 변한 후");
    // console.log(todo);
    return () => {
      // console.log("상태값이 변하기 전");
      // console.log(todo);
    };
    // 두번째 매개변수 : dependency => 지정한 값이 바뀔 때마다 useEffect안의 함수가 실행.
    //  => useEffect 안에서 props 혹은 상태값을 사용을 하면 dependency에 넣어야한다.
  }, [todo]);

  useEffect(() => {
    // console.log("리렌더링");
  });
  // 두번째 매개변수를 아예 비우면 리렌더링 될 때마다 호출.

  return (
    <li
      style={{ padding: "5px 0", textDecoration: todo.done && "line-through" }}
    >
      <span onClick={() => onToggle(todo.id)} style={{ cursor: "pointer" }}>
        {todo.text} ({todo.deadline})
      </span>
      {!todo.done && (
        <button
          style={{ marginLeft: 10 }}
          onClick={() => {
            onRemove(todo.id);
          }}
        >
          삭제
        </button>
      )}
    </li>
  );
});

export default React.memo(TodoList);
