import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';
import Profile from './pages/profile';
import About from './pages/about';
import NewsFeed from './pages/newsfeed';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Login/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/profile" element = {<Profile/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/newsfeed" element = {<NewsFeed/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
