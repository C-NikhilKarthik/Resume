import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
