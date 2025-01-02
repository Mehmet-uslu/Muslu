import React from 'react';
import './App.css';
import YeniSezon from './pages/YeniSezon';
import SignUp from './pages/SignUp';
import LoginForm from './pages/login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './layout/header';
import Navbar from './pages/Navbar';
import Shop from './pages/Shop';
import { Provider } from 'react-redux'; // Redux Provider'ı ekliyoruz
import store from './redux/store'; // Store dosyasını import ediyoruz

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/navbar">
            <Navbar />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/YeniSezon">
            <YeniSezon />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <YeniSezon />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
