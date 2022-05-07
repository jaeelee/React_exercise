// import Circle from "./Circle";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
color:${(props) => props.theme.textColor};
`;

function App() {
  const [username, setUsername] = useState("");
  // onChange함수가 HTML input element에 의해 실행
  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value }, } = event;
    setUsername(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", username);
  };

  return (
    <Container>
      <H1>
        reactJS
      </H1>
    </Container>
    // <div>
    //   {/* <Circle borderColor="bl" bgColor="teal"></Circle> */}
    //   {/* <Circle bgColor="tomato"></Circle> */}
    //   <form onSubmit={onSubmit}>
    //     <input value={username} onChange={onchange} type="text" placeholder="username" />
    //     <button>Login</button>
    //   </form>
    // </div>
  );
}

export default App;
