import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OpenRoute from "./components/core/Auth/OpenRoute";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
