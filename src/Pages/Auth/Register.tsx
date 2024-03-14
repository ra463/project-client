/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/authSlice";
import axiosInstance from "../../utils/axiosUtil";
import { PulseLoader } from "react-spinners";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axiosInstance.post("/api/user/register", {
        name,
        email,
        password,
      });

      if (data.success) {
        setLoading(false);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("id", data.user._id);
        dispatch(
          setToken({
            token: data.token,
            email: data.user.email,
            name: data.user.name,
            id: data.user._id,
          })
        );
        navigate("/");
      }
    } catch (error: any) {
      setLoading(false);
      alert(error.response.data.message);
    }
  };
  return token ? (
    <Navigate to="/" />
  ) : (
    <div className="mx-auto mt-20 fixed left-0 right-0">
      <div className="card-box mt-5 p-5 pt-3 shadow-md rounded bg-primary xll:w-96 m-auto sm:w-11/12">
        <div className="text-center">
          <h3 className="text-white font-bold text-2xl my-5">SIGN IN</h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="p-2 rounded bg-input outline-none placeholder:text-sm"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="p-2 rounded bg-input outline-none placeholder:text-sm"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="p-2 rounded bg-input outline-none placeholder:text-sm"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading ? true : false}
            className={`w-full rounded bg-btn p-2.5 text-sm hover:bg-input transition duration-200 hover:ease-in-out font-bold ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? <PulseLoader size="8" color="#f9f9f9" /> : "SIGN UP"}
          </button>
        </form>
        <Link
          to="/login"
          className="mt-4 text-tag text-sm cursor-pointer hover:underline w-full flex justify-center"
        >
          Go to Login Page
        </Link>
      </div>
    </div>
  );
};

export default Register;
