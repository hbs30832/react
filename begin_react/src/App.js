import InputText from "./InputText";
import TodoList from "./TodoList";

function App() {
  return (
    // 컴포넌트의 retrun값으로 반드시 태그 하나로 묶어야한다.
    // 프래그먼트를 통해서 묶을 수 있다. <>내용</>
    // 태그는 반드시 닫혀있어야한다.

    <>
      <InputText />
    </>
  );
}

export default App;
