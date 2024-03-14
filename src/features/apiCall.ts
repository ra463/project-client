/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "../utils/axiosUtil";
import { setProducts } from "./productSlice";
import { AppThunk } from "../utils/types";

export const getAllProducts =
  (token: string | null): AppThunk<Promise<void>> =>
  async (dispatch) => {
    try {
      const { data } = await axios.get("/api/product/get-all-product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success === true) {
        dispatch(setProducts({ products: data.products }));
      }
    } catch (error: any) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
