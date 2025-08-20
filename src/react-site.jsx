import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import MiniBlog from "./compo/mini-blog/MiniBlog";
import Work1 from "./compo/Work1";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>장경건 REACT 과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/work1" element={<Work1 />} />
          <Route path="/miniblog/*" element={<MiniBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;