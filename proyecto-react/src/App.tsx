import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const DateComponent = () => <h1>{new Date().toLocaleString()}</h1>;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date" element={<DateComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
