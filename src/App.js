// import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Switch, Route } from "react-router-dom"
import TopHeader from './components/TopHeader';
import Home from "./screens/Home"
import MenuBar from './components/MenuBar';
import BNavBar from "./components/BNavBar";
import StoreFeature from './components/StoreFeature';
import C_Carousel from "./components/C_Carousel"
import Signup from "./screens/Signup"
import Login from "./screens/Login"
import Cart from "./screens/Cart"
import SignleProduct from "./screens/SignleProduct"
import WishList from "./screens/WishList"

function App() {

  return (
    <div>
      <TopHeader></TopHeader>
      <div className="mb-5">
        <MenuBar></MenuBar>
      </div>
      <Switch>
        <Route path="/signup" ><Signup /></Route>
        <Route path="/login" ><Login /></Route>
        <Route path="/cart" ><Cart /></Route>
        <Route path="/wishlist" ><WishList /></Route>
        <Route path="/sp/:productId/:productName" ><SignleProduct /></Route>
        <Route exact path="/" ><Home /></Route>
      </Switch>
      <StoreFeature></StoreFeature>
      <BNavBar></BNavBar>
    </div>
  );
}

export default App;
