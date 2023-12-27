import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddGroup from "./pages/Home/AddGroup";
import Main from "./pages/Main/Main";
import Calendar from "./pages/Calendar/Calendar";
import CalendarDetail from "./pages/Calendar/CalendarDetail";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./components/common/Header";
import Letter from "./pages/Letter/Letter";
import LetterWrite from "./pages/Letter/LetterWrite";
import Pop from "./components/Letter/Pop";
import Join from "./pages/Join/Join";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addgroup' element={<AddGroup/>}></Route>   
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/calendar' element={<Calendar/>}></Route>
        <Route path='/photo/:date' element={<CalendarDetail />}></Route>
        <Route path='/join' element={<Join/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/letter' element={<Letter/>}></Route>
        <Route path='/letter/write' element={<LetterWrite/>}></Route>
        <Route path='/letter/pop' element={<Pop/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
