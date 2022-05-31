import React, { useEffect } from "react";

function CreateTodo({ handleInput, onCreate, desc }) {
  //   useEffect(() => {
  //     console.log("렌더링!");
  //   });
  return (
    <div>
      <input name="desc" onChange={handleInput} value={desc} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateTodo);
