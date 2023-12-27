import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddGroup from "./pages/Home/AddGroup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addgroup' element={<AddGroup/>}></Route>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
