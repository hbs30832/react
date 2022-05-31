import React from "react";

function CreateTodo({ handleInput, inputs, inputText, onCreate }) {
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

export default React.memo(CreateTodo);
