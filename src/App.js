import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Calendar from "./pages/Calendar/Calendar";
import CalendarDetail from "./pages/Calendar/CalendarDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/calendar' element={<Calendar/>}></Route>
        <Route path='/photo/:date' element={<CalendarDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
