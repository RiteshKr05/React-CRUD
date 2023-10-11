import "./App.css";

import React from "react";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //basically used to redirect user after clicking subbmit butten to next page
import Read from "./Read";
import Update from "./Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
