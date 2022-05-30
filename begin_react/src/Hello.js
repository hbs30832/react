import React from "react";
import "./App.css";

// 비구조화 할당 : {name, color} = props(객체);
function Hello({ name, color, active, children }) {
  // style 적용은 객체형태 전달.
  const style = {
    backgroundColor: "black",
    color: "#fff",
  };
  //   태그에 JS 값을 사용할 때 {}(중괄호)안에 작성을 한다.
  //   console.log(props);

  return (
    <h1 style={{ color }}>
      안녕 {name}
      {active ? "!" : null}
      {children}
    </h1>
  );
}

// 아무값도 전달되지 않았을 때 기본으로 적용되는 값.
Hello.defaultProps = {
  name: "이름없음",
  color: "pink",
};

export default Hello;
