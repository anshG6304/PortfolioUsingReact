import './App.css';
import Header from './MyComponents/Header';
import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
  
  
} from "react-router-dom";
import home from './MyComponents/home';
import about from './MyComponents/about';
import education from './MyComponents/education';
import contact from './MyComponents/contact';
import skills from './MyComponents/skills';



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <home/>
      <Routes>
        <Route  path="/" exact Component={home}/> 
        <Route  path="/about" exact Component={about}/> 
        <Route  path="/education" exact Component={education}/> 
        <Route  path="/contact" exact Component={contact}/> 
        <Route  path="/skills" exact Component={skills}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
