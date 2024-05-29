/*
import React from "react";
//import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
*/
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Styles.css";
import Navbar from "./Navbar";
import List from "./List";
import Population from "./Population";
import Home from "./Home";
import SouthAmerica from "./SouthAmerica";
import PieChart from "./PieChart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<SouthAmerica />} />
        <Route path="/population" element={<Population />} />
        <Route path="/chart" element={<PieChart />} />
      </Routes>
    </div>
  );
};

export default App;
