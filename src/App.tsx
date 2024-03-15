/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./Pages/Home/Home"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const AddProduct = lazy(() => import("./Pages/Home/AddProduct"));
const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/Sidebar"));

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
