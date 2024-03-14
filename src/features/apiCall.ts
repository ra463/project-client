import axios from "../utils/axiosUtil";
import { setProducts } from "./productSlice";

export const getAllProducts = async (dispatch: any, token: string) => {
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
