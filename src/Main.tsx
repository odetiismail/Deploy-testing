//import React from "react";

import { Home } from "./Home";
import Products from "./Products";
import { Error } from "./Error";
import { Navbar } from "./Navbar";
import { NavNext } from "./NavNext";
// import Section from "./Section";
import { Footer } from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Cart } from "./Cart";
import { Fav } from "./Fav";
// import { SingleProduct } from "./SingleProduct/SingleProduct";
import { SingleProduct } from "./SingleProduct/SingleProduct";
export const Main = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BrowserRouter basename='testing'>
        <Navbar />
        <NavNext />
        {/* <Section /> */}
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="singleProducts/:id" element={<SingleProduct/>}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="favrate" element={<Fav />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        {/*
        Footer
         */}

        <Footer />
      </BrowserRouter>
    </div>
  );
};
