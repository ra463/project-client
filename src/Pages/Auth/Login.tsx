/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/authSlice";
import axiosInstance from "../../utils/axiosUtil";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axiosInstance.post("/api/user/login", {
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

          <div className="flex items-center gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="text-white">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-btn p-2.5 text-sm hover:bg-input transition duration-200 hover:ease-in"
          >
            {loading ? "Loading..." : "LOGIN TO CONTINUE"}
          </button>
        </form>
        <Link
          to="/register"
          className="mt-4 text-tag text-sm cursor-pointer hover:underline w-full flex justify-center"
        >
          Don't have an account?
        </Link>
      </div>
    </div>
  );
};

export default Login;
