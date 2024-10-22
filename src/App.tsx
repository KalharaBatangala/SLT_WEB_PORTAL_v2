import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "@fontsource/inter";
import "@fontsource/inter/700.css";
import "@fontsource/poppins";
import "@fontsource/sarabun";
//import LoginOrSignup from "./Pages/Auth/LoginOrSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
