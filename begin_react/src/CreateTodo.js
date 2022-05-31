import React, { useEffect } from "react";

function CreateTodo({ handleInput, inputs, inputText, onCreate }) {
  useEffect(() => {
    console.log("렌더링");
  });
  return (
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
  );
}

// React.memo로 감싸면 부모가 렌더링이 다시 일어나도 전달 받는 props가 변하지않으면
// 다시 렌더링하지 않는다.
export default React.memo(CreateTodo);
