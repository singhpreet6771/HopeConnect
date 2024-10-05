import "./app.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          {/* <Route path="/customer" element={<Customer />} />
          <Route path="/userinfo/:username" element={<UserInfo />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
