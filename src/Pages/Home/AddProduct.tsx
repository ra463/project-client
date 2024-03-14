/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import axiosInstance from "../../utils/axiosUtil";

const AddProduct = () => {
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([
    { name: "", quantity: 0, price: 0, totalPrice: 0 },
  ]);

  const addMoreProduct = () => {
    setProducts([
      ...products,
      { name: "", quantity: 0, price: 0, totalPrice: 0 },
    ]);
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const newProducts = [...products];
    newProducts[index] = { ...newProducts[index], [name]: value };
    setProducts(newProducts);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      const { data } = await axiosInstance.post(
        "/api/product/add-product",
        { product_array: products },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        setLoading(false);
        alert(data.message);
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const removeProduct = () => {
    setProducts(products.slice(0, -1));
  };

  return (
    <div className="w-full mt-2 rounded mr-3 max-w-full md:m-auto md:w-11/12">
      <div className="card-box mt-5 p-5 pt-3 shadow-md rounded bg-primary xll:w-96 m-auto sm:w-11/12">
        <div className="text-center">
          <h3 className="text-white font-bold text-xl my-5 mt-3">
            Add Product
          </h3>
        </div>
        <form className="flex flex-col gap-3 max-h-80 overflow-y-auto">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-2 flex-col">
              <span>Product - {index + 1}</span>
              <input
                type="text"
                value={product.name}
                onChange={(e) => handleInputChange(index, e)}
                className="p-2 rounded bg-input outline-none placeholder:text-sm w-full"
                placeholder="Product Name"
                required
                name="name"
              />
              <input
                type="number"
                className="p-2 rounded bg-input outline-none placeholder:text-sm w-full"
                placeholder={product.quantity === 0 ? "Product Quantity" : ""}
                required
                onChange={(e) => handleInputChange(index, e)}
                name="quantity"
                value={product.quantity === 0 ? "" : product.quantity}
              />
              <input
                type="number"
                className="p-2 rounded bg-input outline-none placeholder:text-sm w-full"
                placeholder={product.price === 0 ? "Product Price" : ""}
                required
                onChange={(e) => handleInputChange(index, e)}
                name="price"
                value={product.price === 0 ? "" : product.price}
              />
              <input
                type="number"
                className="p-2 rounded bg-input outline-none placeholder:text-sm w-full"
                placeholder={product.totalPrice === 0 ? "Total Price" : ""}
                required
                onChange={(e) => handleInputChange(index, e)}
                name="totalPrice"
                value={product.totalPrice === 0 ? "" : product.totalPrice}
              />
            </div>
          ))}
          {products.length > 1 && (
            <button
              type="button"
              onClick={removeProduct}
              className="bg-red text-white rounded p-2 mt-2 hover:bg-input transition duration-200 hover:ease-in"
            >
              REMOVE LAST PRODUCT
            </button>
          )}
          <button
            onClick={addMoreProduct}
            className="w-full rounded bg-btn p-2.5 text-sm hover:bg-input transition duration-200 hover:ease-in"
          >
            ADD MORE PRODUCT'S
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full rounded bg-lightgreen p-2.5 text-sm hover:bg-input transition duration-200 hover:ease-in"
          >
            {loading ? "LOADING..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
