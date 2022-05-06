import styled, { keyframes } from "styled-components";

// styled-components
const Father = styled.div`
height:100vh;
width: 100vw;
background-color: ${(props) => props.theme.backgroundColor};
`;
const Wrapper = styled.div`
display: flex;
`;

// props를 활용
const Box = styled.div`
background-color: ${(props) => props.bgColor};
width: 100px;
height:100px;
`;

// 컴포넌트 확장
// 기존 컴포넌트(Box)의 모든 속성을 가져온 후 새로운 속성(``안의 내용)을 추가
const Circle = styled(Box)`
border-radius: 50px;
`;

const Btn = styled.button`
color:white;
background-color: tomato;
border:0;
border-radius: 15px;
`;

// attrs : 속성값 설정
const Input = styled.input.attrs({ require: true, minLength: 10 })`
background-color: tomato;
`;

// 애니메이션 넣기
const rotationAnimation = keyframes`
/* from{
  transform: rotate(0deg);
}
to{
  transform:rotate(360deg);
} */

0%{
  border-radius: 0px;
  transform: rotate(0deg);
}
50%{
  border-radius: 100px;
}
100%{
 border-radius: 0px;
  transform: rotate(360deg); 
}
`;

const Emoji = styled.span`
font-size:36px;
`;

const AnimationBox = styled.div`
width: 100px;
height:100px;
background-color: gold;
display:flex;
justify-content: center;
align-items: center;
animation:${rotationAnimation} 1s linear infinite;
/* compoenet안의 태그 선택 */
/* span{
  font-size: 36px;
  &:hover{ // 아래 주석인 span:hover와 동일
    font-size: 46px;
  }
} */
/* span:hover{
    font-size: 46px;
} */
// styled-compoent를 타겟으로 지정
${Emoji}:hover{
    font-size: 46px;
  } 
`;

//theme 적용
const Title = styled.h1`
color:${(props) => props.theme.textColor};
`;


function App() {
  return (
    <Father>
      <Title>styeld-components</Title>
      <Wrapper as="header">
        <Box bgColor="teal"></Box>
        <Circle bgColor="tomato"></Circle >
      </Wrapper>

      <Wrapper>
        <Btn>Login</Btn>
        {/* as : 컴포넌트의 스타일은 그대로 두고 태그만 바꾸고 싶을 때 */}
        <Btn as="a" href="/">Login</Btn>
      </Wrapper>
      <Wrapper>
        <Input />
        <Input />
        <Input />
      </Wrapper>
      <Wrapper>
        <AnimationBox>
          <Emoji>🤪</Emoji>
        </AnimationBox>
        <Emoji>🤪</Emoji>
      </Wrapper>
    </Father>
  );
}

export default App;
