import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/calendar' element={<Calendar/>}></Route>
        <Route path='/photo/:date' element={<Calendar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
