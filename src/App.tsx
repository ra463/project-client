/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import AddProduct from "./Pages/Home/AddProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector((state: any) => state.auth);
  const [show, setShow] = useState(false);

  return (
    <Router>
      {token && <Header setShow={setShow} />}
      <div className="flex flex-row gap-3 relative">
        {token && <Sidebar show={show} />}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add/add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
