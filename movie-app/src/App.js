/*
 BrouserRouter => 일반적인 홈페이지 경로 
 HashRouter => /#/이 붙는 경로
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes> {/* Routes : 한번에 하나의 Route만 렌더링 하기 위함 */}
        <Route path="/movie" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
