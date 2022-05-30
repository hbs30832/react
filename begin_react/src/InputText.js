import React, { useState, useRef } from "react";

function InputText() {
  const [inputs, setText] = useState({
    nickName: "",
    email: "",
    password: "",
  });

  const nickNameInput = useRef();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setText({
      ...inputs, // {email: "기존값", nickName: "기존값"}
      [name]: value,
    });
  };

  const reset = () => {
    setText({
      email: "",
      nickName: "",
      password: "",
    });
    console.log(nickNameInput);
    nickNameInput.current.focus();
  };

  return (
    <div>
      닉네임 :
      <input
        type="text"
        name="nickName"
        onChange={handleInput}
        value={inputs.nickName}
        ref={nickNameInput}
      />
      이메일 :
      <input
        type="text"
        name="email"
        onChange={handleInput}
        value={inputs.email}
      />
      패스워드 :
      <input name="password" onChange={handleInput} />
      <button onClick={reset}>초기화</button>
      <div>
        <h2>
          {inputs.nickName}({inputs.email}) {inputs.password}
        </h2>
      </div>
    </div>
  );
}

let obj = {
  name: "seok",
  age: 30,
  gender: "male",
};
let keyName = "name";
console.log(obj[keyName]); // => obj.name => "seok"
keyName = "age";
console.log(obj[keyName]); // => obj.age => 30
keyName = "gender";
console.log(obj[keyName]); // => obj.gender => "male"

export default InputText;
