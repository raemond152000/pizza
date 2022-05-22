import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Orders/Form/Form';
import MainMenu from "./components/MainMenu/MainMenu";
import Home from "./components/Home/Home";
import OrderPage from "./components/OrderPage/OrderPage";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/get-your-pizza" element={<Form />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
      

    </div>
  );
}

export default App;
