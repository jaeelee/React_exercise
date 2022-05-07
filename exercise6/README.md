# exercise6
reactJS + typeScript + styled-components


## typeScript
- javaScript를 기반으로 한 언어
- 코드가 실행되기 전 오류 확인

1. 설치
- create-react-app 으로 설치
```
npx create-react-app 프로젝트명 --template typescript
```

- 기존 프로젝트에 추가
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
tsconfig.json파일이 없다면 추가로 설정

<br>
2. 확장자 변경

```.js``` -> ```.tsx```로 변경하기

3. index.tsx 에러 수정
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
```
위 코드에서 에러 날 경우 =>  as HTMLElement 추가
```typescript
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
```

<br>
>tsconfig.json : ts 코드를 js 코드로 컴파일(type checking + transpile) 과정에 필요한 설정을 지정하는 파일
><br>react-app.env.d.ts : create-react-app으로 생성된 프로젝트에 필요한 type들을 참조하기 위한 type declaration 파일

<br><br>

## styled-components
1. typeScript definition(타입스트립트용 설명) 설치
```
npm i styled-components
npm i --save-dev @types/styled-components 
```

