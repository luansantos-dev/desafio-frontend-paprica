import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/*Header and Footer */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/* Pages */
import Home from "../src/views/Home";
import AboutUs from "../src/views/AboutUs";
import Courses from "../src/views/Courses";
import Menu from "./views/MainMenu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/course" element={<Courses />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
