import { useState } from "react";
import styled from "styled-components";

//interface : 객체 모양을 typescript에게 설명
//Prop Types와 유사
//interface는 코드 실행 전 에러 검사
//Prop Types는 코드 실행 후 에러 검사

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}
const Container = styled.div<ContainerProps>`
width: 200px;
height:200px;
background-color: ${(props) => props.bgColor};
border-radius: 100px;
border:1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string; // required props
    borderColor?: string; // ? : optinal props
    //borderColor: string | undefined; // 위 코드와 동일한 코드
    text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {

    //typescript + reactHook
    const [counter, setCounter] = useState<number | string>(0); // 타입이 변경될 가능성이 있는 경우 <>를 사용


    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}> {/* ?? : default값 */}
        {text}
    </Container>;
}

export default Circle;