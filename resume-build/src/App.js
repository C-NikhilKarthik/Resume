import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
