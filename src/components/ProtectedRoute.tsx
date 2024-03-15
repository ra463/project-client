/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../features/store";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useSelector((state: RootState) => state.auth);
  return token ? children : <Navigate to="/login" />;
}
