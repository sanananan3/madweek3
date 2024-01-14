import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./pages/HomeView";
import MyPage from './components/MyPage';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<HomeView/>} />
      {/* <Route path = "/mypage" element = {<MyPage/>} /> */}
    </Routes>
   </BrowserRouter>

  );
}

export default App;
