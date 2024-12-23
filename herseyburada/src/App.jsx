import React from 'react';
import './App.css';
import YeniSezon from './components/YeniSezon';
import SignUp from './pages/SignUp';
import LoginForm from './pages/login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './layout/header';
import Navbar from './pages/Navbar';



function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
      <Route path="/navbar">
          <Navbar/>
        </Route>
      <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/login">
          <LoginForm/>
        </Route>
        <Route path="/header">
          <Header/>
        </Route>
        <Route path="/">
          <YeniSezon/>
        </Route>
        
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;


