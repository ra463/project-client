import { ThunkAction, Action } from "@reduxjs/toolkit";
import { RootState } from "../features/store";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type Product = {
  name: string;
  qty: number;
  rate: number;
  total: number;
  user: {
    name: string;
  };
};
